
const TodoCompute = ({computeItemsLeft,clearCompleted}) => { 
    return (
        
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4 ">
        <span className="text-gray-400">{computeItemsLeft} items left</span>
        <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
    </section>
    )
 }

 export default TodoCompute