import React from 'react'

const CreatePosts = () => {
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className='form_error_message'>
          This is an Error Message
        </p>
        {/* Create Post */}
        <form action="" className="form create_post-form">
          <input type="text" />
        </form>
      </div>
    </section>
  )
}

export default CreatePosts