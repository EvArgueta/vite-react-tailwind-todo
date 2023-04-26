import IconCheck from "./icons/IconChek";
import IconCross from "./icons/IconCross";

const TodoItem  = ({todo,remoreTodo,updateTodo}) => { 

    const {id,title,completed}=todo
    return (
        <article className="flex gap-4  border-b border-b-gray-400 ">
                      <button onClick={()=>updateTodo(id)} className={`h-5 w-5 flex-none rounded-full border-2 ${completed? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                      :"inline-block"}`}>
                        {completed && <IconCheck/>}
                      </button>
                        <p className={`grow text-gray-600 ${completed && "line-through"}`}>
                          {title}
                      </p>
                      <button className="ml-auto flex-none"  onClick={()=>remoreTodo(id)}>
                          <IconCross ></IconCross>
                      </button>
                  </article>
    )
 }

 export default TodoItem;