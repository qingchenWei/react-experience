import { Tabs, Button, Input } from "antd";
import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext,
  useLayoutEffect,
  useRef,
  createRef,
} from "react";
const { TabPane } = Tabs;
const ReducerContext = createContext(null);

const useStateCom = () => {
  const [count, setCount] = useState(0);
  const addClick = () => {
    setCount(count + 1);
  };
  const subtractClick = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h3>useState</h3>
      <div>
        useState是react自带的一个hook函数，它的作用就是用来声明状态变量。useState这个函数接收的参数是我们的状态初始值（initial
        state），它返回了一个数组，这个数组的第[0]项是当前当前的状态值，第[1]项是可以改变状态值的方法函数
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button type="primary" onClick={subtractClick}>
          -
        </Button>
        <p style={{ fontSize: "50px", margin: "0 20px" }}>{count}</p>
        <Button type="primary" onClick={addClick}>
          +
        </Button>
      </div>
    </div>
  );
};
const useEffectCom = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log("组件挂载完之后执行,");
    // 相当于挂载
    return () => {
      //清除副作用
      //相当于卸载
    };
  }, []);
  useEffect(() => {
    console.log("组件的任何更新触发,");
    return () => {
      //清除副作用
    };
  });
  useEffect(() => {
    //监听一个
    console.log("count更新触发,");
    return () => {
      //清除副作用
    };
  }, [count]);
  useEffect(() => {
    //监听一个
    console.log("count和conut1更新触发", count);
    return () => {
      //清除副作用
    };
  }, [count, count1]);
  return (
    <div>
      <h3>{count}</h3>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <h3>{count1}</h3>
      <Button type="primary" onClick={() => setCount1(count1 + 1)}>
        +
      </Button>
      <h3>useEffect</h3>
      <p>副作用钩子：用于处理组件中的副作用，用来取代生命周期函数</p>
      <p>
        什么是副作用？<br></br> 副作用 ( side effect ):
        数据获取，数据订阅，以及手动更改 React 组件中的 DOM 都属于副作用
        因为我们渲染出的页面都是静态的，任何在其之后的操作都会对他产生影响，所以称之为副作用
      </p>
      <div>
        <h5>依赖参数不同时有不同的效果：</h5>
        <br></br>为空： 组件的任何更新，该useEffect 对应的返回函数和函数都执行
        <br></br>为空数组: 不监听组件的更新
        <br></br>数组中有具体依赖：对应的依赖数据，有变化的时候，才会执行
      </div>
    </div>
  );
};
const useLayoutEffectCom = () => {
  const [count, setCount] = useState(100);
  const [count1, setCount1] = useState(100);
  useEffect(() => {
    console.log(count, "1");
    if (count === 100000) {
      setCount(1);
    }
  }, [count]);
  useLayoutEffect(() => {
    console.log(count1, "2");
    if (count1 === 100000) {
      setCount1(1);
    }
  }, [count1]);
  return (
    <div>
      <h3>useLayoutEffect</h3>
      <p>
        1.useEffect会在渲染的内容更新到DOM上后执行,不会阻塞DOM的更新
        <br />
        2.useLayoutEffect会在渲染的内容更新到DOM上之前进行,会阻塞DOM的更新(一般不怎么用)
      </p>
      <h5>区别:</h5>
      <h2>{count}</h2>
      <div>useEffect使用</div>
      <Button type="primary" onClick={() => setCount(100000)}>
        变更
      </Button>
      <h2>{count1}</h2>
      <div>useLayoutEffect使用</div>
      <Button type="primary" onClick={() => setCount1(100000)}>
        变更
      </Button>
    </div>
  );
};

const useReducerCom = () => {
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [number, dispatchNumbner] = useReducer((state, action) => {
    const { payload, name } = action;
    /* return的值为新的state */
    switch (name) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      case "reset":
        return payload;
      default:
        return state;
    }
  }, 0);
  const MyChild = (prpos) => {
    const { dispatch, number } = useContext(ReducerContext);
    return (
      <div>
        <h3>来自父组件(prpos):{prpos.number}</h3>
        <Button type="primary" onClick={() => dispatch({ name: "sub" })}>
          -
        </Button>
        <hr />
        <h3>来自父组件(useContext):{number}</h3>
        <p>使用:{`const {(dispatch, number)} = useContext(ReducerContext)`}</p>
        <Button
          type="primary"
          onClick={() => dispatch({ name: "reset", payload: 666 })}
        >
          reset
        </Button>
      </div>
    );
  };
  const MySon = () => {
    return (
      <ReducerContext.Consumer>
        {(value) => (
          <div>
            <h3>来自父组件(useContext):{value.number}</h3>
            <p>
              使用:{`<ReducerContext.Consumer></ReducerContext.Consumer>`}包裹
            </p>
            <Button
              type="primary"
              onClick={() => value.dispatch({ name: "add" })}
            >
              +
            </Button>
          </div>
        )}
      </ReducerContext.Consumer>
    );
  };
  return (
    <div>
      <h3>useReducer</h3>
      <p>
        useReducer 是 react-hooks 提供的能够在无状态组件中运行的类似redux的功能
        api 。
      </p>
      <Button type="primary" onClick={() => dispatchNumbner({ name: "add" })}>
        增加
      </Button>
      <Button type="primary" onClick={() => dispatchNumbner({ name: "sub" })}>
        减少
      </Button>
      <Button
        type="primary"
        onClick={() => dispatchNumbner({ name: "reset", payload: 666 })}
      >
        赋值
      </Button>
      {/* 把dispatch 和 state 传递给子组件  */}
      <div>{number}</div>
      <ReducerContext.Provider value={{ dispatch: dispatchNumbner, number }}>
        <MyChild number={number} dispatch={dispatchNumbner}></MyChild>
        <hr />
        <MySon></MySon>
      </ReducerContext.Provider>
    </div>
  );
};
const useRefCom = () => {
  const [count, setCount] = useState(0);
  const myRef2 = useRef(0);
  const myRef = useRef(null);
  const myCreateRef = createRef();
  // 当 useRef 的内容发生变化时,它不会通知您。
  // 更改.current属性不会导致重新呈现。因为他一直是一个引用
  useEffect(() => {
    console.log(myRef, "myRef");
    myRef?.current?.focus();
    myRef2.current = count;
    myCreateRef.current = count;

    console.log(myRef2);
  });
  function handleClick() {
    setTimeout(() => {
      console.log(count);
      console.log(myRef2.current);
    }, 3000);
  }

  return (
    <div>
      <h3>以下分别介绍 useRef 的两个使用场景：</h3>
      <h5>1、指向 dom 元素</h5>
      <Input ref={myRef} type="text" />
      <div>2、存放变量</div>
      <p>
        useRef 在 react hook 中的作用, 正如官网说的, 它像一个变量, 类似于 this ,
        它就像一个盒子, 你可以存放任何东西. createRef
        每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用
      </p>
      <div>
        <Button onClick={() => setCount(count + 1)}>点击count</Button>
        <Button onClick={() => handleClick()}>查看</Button>
      </div>
    </div>
  );
};

function App() {
  const hooks = [
    {
      name: "useState",
      component: useStateCom,
    },
    {
      name: "useEffect",
      component: useEffectCom,
    },
    {
      name: "useLayoutEffect",
      component: useLayoutEffectCom,
    },
    {
      name: "useReducer-useContext",
      component: useReducerCom,
    },
    {
      name: "useRef",
      component: useRefCom,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs defaultActiveKey="useState" onChange={onChange}>
      {hooks.map((item) => {
        return (
          <TabPane tab={item.name} key={item.name}>
            <item.component />
          </TabPane>
        );
      })}
    </Tabs>
  );
}

export default App;
