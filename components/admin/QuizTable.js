const QuizTable = () => {
    const quizzes = [
      { id: 1, title: 'Math Quiz', date: '2024-06-01', status: 'Published' },
      { id: 2, title: 'Science Quiz', date: '2024-06-02', status: 'Draft' },
      // Add more mock quizzes here
    ];
  
    return (
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz.id}>
              <td className="py-2 px-4 border-b">{quiz.title}</td>
              <td className="py-2 px-4 border-b">{quiz.date}</td>
              <td className="py-2 px-4 border-b">{quiz.status}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default QuizTable;
  