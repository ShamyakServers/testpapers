const AddQuizForm = () => (
  <div>
    <form className="p-6 rounded shadow-md">
      <h2 className="text-2xl mt-4">Add New Quiz</h2>
      <div className="mb-4">
        <label className="block bg-gray-900 text-white">Quiz Title</label>
        <input
          type="text"
          className="w-full px-4 my-2 border rounded bg-gray-900 text-white"
          placeholder="Enter quiz title"
        />
      </div>
      <div className="mb-4">
        <label className="block bg-gray-900 text-white">Description</label>
        <textarea
          className="w-full px-4 m  y-2 border rounded bg-gray-900 text-white"
          placeholder="Enter quiz description"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Quiz</button>
    </form>
    </div>
  );
  
  export default AddQuizForm;
  