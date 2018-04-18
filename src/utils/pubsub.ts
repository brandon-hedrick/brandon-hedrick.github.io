interface Topics {
  [key: string]: Topic;
}

interface Topic {
  stream: any[];
  listeners: Listener[];
}

interface Listener {
  distinct: boolean;
  fn: any;
}

const pubSub = () => {
  const topics: Topics = {};
  const initTopic = (topic: string) => {
    if (!topics.hasOwnProperty(topic)) { topics[topic] = { stream: [], listeners: [] } as Topic; }
  };
  return {

    next: (topic: string, info: any) => {

      initTopic(topic);
      const $ = topics[topic].stream;
      const li = $.push(info) - 1; // last index

      topics[topic].listeners.forEach(({fn, distinct}) => {
        const last = $[li];
        if (!distinct || (distinct && last !== $[li - 1])) {
          fn(last !== undefined ? last : null);
        }
      });

    },

    subscribe : (topic: string, listener: any, distinct?: boolean) => {

      initTopic(topic);
      const index = topics[topic].listeners.push({
        distinct: !!distinct,
        fn: listener,
      }) - 1;
      const $ = topics[topic].stream;
      // new subscribers get current value if there is any
      if ($.length) {
        listener($[$.length - 1]);
      }

      return {
        unsubscribe: () => delete topics[topic].listeners[index],
      };
    },
  };
};

export default pubSub;
