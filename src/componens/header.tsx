import React, { FormEvent, useRef, useEffect } from 'react';

type Props = {
  addTodo: (event: FormEvent<HTMLFormElement>) => void;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  closeInput: boolean;
};
export const Header: React.FC<Props> = ({
  addTodo,
  todo,
  setTodo,
  closeInput,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!todo) {
      inputRef.current?.focus();
    }
  }, [todo]);

  return (
    <header className="todoapp__header">
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />
      <form onSubmit={addTodo}>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          disabled={!closeInput}
          ref={inputRef}
        />
      </form>
    </header>
  );
};
