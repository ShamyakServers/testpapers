const AddMockPaperForm = () => (
    <form className="p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Add New Mock Paper</h2>
      <div className="mb-4">
        <label className="block bg-gray-900 text-white">Paper Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
          placeholder="Enter paper title"
        />
      </div>
      <div className="mb-4">
        <label className="block bg-gray-900 text-white">Description</label>
        <textarea
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
          placeholder="Enter paper description"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Paper</button>
    </form>
  );
  
  export default AddMockPaperForm;
  