import React from 'react';
const Todo=({todo:{title,id,completed}})=>{ 
    const tag=<div data-testid={`todo_${id}`}>{title}</div>;
    return completed?tag : (<strike data-testid="strike-para">{tag}</strike>);
}
export default Todo;