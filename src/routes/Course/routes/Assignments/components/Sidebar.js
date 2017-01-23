/*globals COURSES:true */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {
  render() {
    let { assignments } = COURSES[this.props.params.courseId]

    return (
      <div>
        <h3>Sidebar Assignments</h3>
        <ul>
          {assignments.map(assignment => (
            <li key={assignment.id}>
              <Link to={`/course/${this.props.params.courseId}/assignments/${assignment.id}`}>
                {assignment.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
