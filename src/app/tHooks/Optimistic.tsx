"use client";
import { useOptimistic, useState } from "react";

const ListProps = [{ id: 1, name: "ali" }];
const Optimistic = () => {
  const [list, setList] = useState(ListProps);
  const [Optlist, setOptList] = useOptimistic(list);

  function updateList() {
    setList([...list, { id: 2, name: "Karen" }]);
  }
  async function updateOptList() {
    // we can also pass extra prop to the optimistic list
    setOptList((prev) => [...prev, { id: 23, name: "Karen", pending: true }]);
    ///call an api to update
    //then update the source of truth , which will override the value in optimistic list
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateList();
  }
  return (
    <div>
      <form action={updateOptList}>
        <button type="button" onClick={updateList}>
          Update Origin List
        </button>
        <button type="submit">Submit</button>
      </form>
      {Optlist.map((i, index) => (
        <div key={index} style={{ opacity: i.pending ? 0.7 : 1 }}>
          {i.name}
        </div>
      ))}
    </div>
  );
};

export default Optimistic;
