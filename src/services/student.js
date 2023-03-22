import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const studentApi=createApi({
    reducerPath:"studentApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001/"
    }),
    tagTypes:["student"],
    endpoints:(builder)=>({
  getStudents:builder.query({
    query: () => "students",
    transformResponse: (res) => res.reverse(),
    providesTags: ["Student"],
  })
  ,
  addStudent:builder.mutation({
query:(student)=>({
url:"students",
method:"POST",
body:student
}),
invalidatesTags: ["Student"]
  }),
updatestudent:builder.mutation({
    query:({id,...student})=>({
url:`students/${id}`,
method:"PUT",
body:student
    }),
    invalidatesTags: ["Student"],
}),
deleteStudent:builder.mutation({
    query:(id)=>({
        url:`students/${id}`,
        method:"DELETE"
    }),
    invalidatesTags: ["Student"],
})

    })
})


export const {useAddStudentMutation,useDeleteStudentMutation,useGetStudentsQuery,useUpdatestudentMutation}=studentApi