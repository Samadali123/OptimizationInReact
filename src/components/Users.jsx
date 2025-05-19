// import React from 'react';
// import useUsers from '../hooks/UseUsers';

// const Users = () => {
//   const { users, loading, error } = useUsers();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>

//       {/* Loading Spinner */}
//       {loading && (
//         <div className="flex justify-center items-center min-h-[200px]">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )}

//       {/* Error Message */}
//       {!loading && error && (
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
//           <strong className="font-bold">Error:</strong>
//           <span className="block sm:inline ml-1">{error}</span>
//         </div>
//       )}

//       {/* No Users */}
//       {!loading && !error && users.length === 0 && (
//         <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
//           No users found. Try adding some users to the system.
//         </div>
//       )}

//       {/* Users Table */}
//       {!loading && !error && users.length > 0 && (
//         <div className="bg-white shadow-md rounded-lg overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 text-sm">
//             <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
//               <tr>
//                 <th className="px-6 py-3 text-left">ID</th>
//                 <th className="px-6 py-3 text-left">Username</th>
//                 <th className="px-6 py-3 text-left">Email</th>
//                 <th className="px-6 py-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {users.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center space-x-3">
//                       <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-medium text-blue-600">
//                         {user.username?.charAt(0).toUpperCase()}
//                       </div>
//                       <span className="text-gray-800 font-medium">{user.username}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
//                       {user.email}
//                     </a>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap space-x-4">
//                     <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
//                     <button className="text-red-600 hover:text-red-900">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Footer info */}
//       {!loading && !error && (
//         <div className="mt-4 text-gray-500 text-sm">
//           <p>Total users: {users.length}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;


import React from 'react';
import useUsers from '../hooks/UseUsers';

const Users = () => {
  const { users, loading, error } = useUsers();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Error Message */}
      {!loading && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-1">{error}</span>
        </div>
      )}

      {/* No Users */}
      {!loading && !error && users.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
          No users found. Try adding some users to the system.
        </div>
      )}

      {/* Users Table */}
      {!loading && !error && users.length > 0 && (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Username</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">{user.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center font-medium text-blue-600 text-sm">
                        {user.username?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-gray-800 font-medium">{user.username}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline break-all">
                      {user.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap space-x-3 text-sm">
                    <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer info */}
      {!loading && !error && (
        <div className="mt-4 text-gray-500 text-sm">
          <p>Total users: {users.length}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
