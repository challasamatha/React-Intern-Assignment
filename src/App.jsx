import TodoApp from "./components/Todo/TodoApp";
import UserForm from "./components/Forms/UserForm";
import MultiProgressBar from "./components/Progress/MultiProgressBar";
import CountdownTimer from "./components/Timer/CountdownTimer";
import SearchList from "./components/Search/SearchList";

export default function App() {
  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center">React Internship Assignment</h1>

      <TodoApp />
      <UserForm />
      <MultiProgressBar />
      <CountdownTimer />
      <SearchList />
    </div>
  );
}