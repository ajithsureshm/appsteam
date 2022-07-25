import React from 'react'

function Home({student}) {
  return (
    <div>
       <div>

<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">{student.name}</li>
        <li class="list-group-item">{student.dob}</li>
        <li class="list-group-item">{student.malayalam}</li>
        <li class="list-group-item">{student.english}</li>
        <li class="list-group-item">{student.hindi}</li>
        <li class="list-group-item">{student.maths}</li>
    </ul>
</div>





</div>
    </div>
  )
}

export default Home
