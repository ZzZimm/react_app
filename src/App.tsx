import React, { useState } from "react";
import ListItem from "./ListItem";

let id = 0;

type Task = {
  title?: string | null;
  description: string | null;
};

function App(): React.ReactElement {
  const [listElem, setListElem] = useState<Array<Task>>([]);
  const [reverseSortTitle, setReverseSortTitle] = useState<boolean>(false);
  const [reverseSortDescription, setReverseSortDescription] = useState<boolean>(
    false
  );

  function addElem(): void {
    const tmpListElem = [...listElem];
    const title = window.prompt(
      "Enter task title: ",
      "Grocery shopping for Max's birthday"
    );
    const description = window.prompt(
      "Enter task description: ",
      "Dark Rhum, Ginger Beer & Crackers"
    );

    tmpListElem.push({
      title: title,
      description: description
    });
    setListElem(tmpListElem);
  }

  function onDelete(index: number): void {
    const tmpListElem = [...listElem];

    tmpListElem.splice(index, 1);
    setListElem(tmpListElem);
  }

  function sortByTitle(): void {
    const tmpListElem = [...listElem];

    tmpListElem.sort((a: Task, b: Task) => {
      if (!a.title || !b.title) return 0;
      if (a.title < b.title) return reverseSortTitle ? 1 : -1;
      if (a.title >= b.title) return reverseSortTitle ? -1 : 1;
      return 0;
    });
    setListElem(tmpListElem);
    setReverseSortTitle(!reverseSortTitle);
  }

  function sortByDescription(): void {
    const tmpListElem = [...listElem];

    tmpListElem.sort((a, b) => {
      if (!a.description || !b.description) return 0;
      if (a.description < b.description) return reverseSortTitle ? 1 : -1;
      if (a.description >= b.description) return reverseSortTitle ? -1 : 1;
      return 0;
    });
    setListElem(tmpListElem);
    setReverseSortDescription(!reverseSortDescription);
  }

  return (
    <>
      <header>
        <div id="headerContainer">
          <div>
            To Do List
            <br />
            <br />
          </div>
          <div>
            <button id="addTask" onClick={addElem}>
              +Add Task
            </button>
          </div>
        </div>
      </header>
      {listElem.length !== 0 && (
        <table id="toDoList">
          <tbody>
            <tr>
              <th className="checkbox"></th>
              <th className="title">
                Title
                <button onClick={() => sortByTitle()} className="button">
                  sort
                </button>
              </th>
              <th className="description">
                Description
                <button onClick={() => sortByDescription()} className="button">
                  sort
                </button>
              </th>
              <th className="dueDate">
                Due date
                <button onClick={() => {}} className="button">
                  sort
                </button>
              </th>
              <th className="actionBox">Actions</th>
            </tr>
            {listElem.map((it, index) => (
              <ListItem
                key={id++}
                element={it}
                onDelete={() => onDelete(index)}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
