import React from 'react'


// [id] we can access via props or params here. 
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params; // we can access id like this. because [id] is dynamic segment.

    return (
        <div>
            UserDetails {id}
        </div>
    )
}

export default UserDetails
