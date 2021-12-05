import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../components/todo";

afterEach(() => {
  cleanup();
});

test("should render completed Todo", () => {
  const todo = { id: 1, title: "understand", completed: true };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo_1");
  const strikePara = screen.queryByTestId("strike-para");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("understand");
  expect(strikePara).not.toBeInTheDocument();
});

test("should render incompleted Todo", () => {
  const todo = { id: 2, title: "dinner", completed: false };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo_2");
  const strikePara = screen.queryByTestId("strike-para");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("dinner");
  expect(strikePara).toContainElement(todoElement);
});

test("snapshot test", () => {
  const todo = { id: 1, title: "understand", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      data-testid="todo_1"
    >
      understand
    </div>
  `);
  console.log(tree);
});

// test('should render Todo component',()=>{
//     render(<Todo/>);
//     const todoElement=screen.getByTestId('todo_1');
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent('hellow');
// });

// test('test',()=>{
//     expect(true).toBe(true);
// })
