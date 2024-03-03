"use client"
import { PencilIcon, UserIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { EditUsers } from "../../Buttons/edit-user-button"
import type { User } from "@prisma/client"
import { editUserRole } from "@/app/lib/actions"
import { CheckIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react"
export const UserTable = ({ users }: { users: User[] }) => {
  const [edit, setEdit] = useState(false)
  const session = useSession()
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div className="mb-8 overflow-x-auto rounded-md bg-gray-100 p-3">
      <table className="w-full">
        <thead>
          <tr className="font-roboto font-medium *:px-8 ">
            <th className="">Image</th>
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Role</th>
            <th className=" ">Edit Role</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              const editUserRoleWithId = editUserRole.bind(null, user.id)
              return (
                <tr
                  className="w-full bg-white text-center hover:bg-gray-50"
                  key={user.id}
                >
                  <td className="">
                    {user.image ? (
                      <Image
                        className="mx-auto rounded-full p-1 text-center"
                        alt="user image"
                        src={user.image}
                        width={80}
                        height={80}
                      />
                    ) : (
                      <UserIcon width={80} height={80} />
                    )}
                  </td>
                  <td className="">{user.name}</td>
                  <td className="">{user.email}</td>
                  <td className="">
                    {edit ? (
                      <form ref={formRef} action={editUserRoleWithId}>
                        <select
                          className="w-[100px] rounded-md border border-black bg-gray-50 p-1"
                          id="userRole"
                          name="userRole"
                          defaultValue={user.role!}
                          required
                        >
                          <option value="" disabled>
                            Select user role
                          </option>
                          <option value="admin">admin</option>
                          <option value="user">user</option>
                        </select>
                      </form>
                    ) : (
                      user.role
                    )}
                  </td>
                  <td className="">
                    <button
                      type="submit"
                      onClick={() => {
                        setEdit(!edit)
                        if (edit) {
                          console.log("formRef.current")
                          formRef.current && formRef.current.requestSubmit()
                          setTimeout(() => {
                            session.update()
                          }, 3000)
                        }
                      }}
                    >
                      {edit ? (
                        <CheckIcon className="h-6 w-6 text-green-700 transition-transform hover:scale-110 " />
                      ) : (
                        <PencilIcon className="h-6 w-6 text-black transition-transform hover:scale-110 " />
                      )}
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
