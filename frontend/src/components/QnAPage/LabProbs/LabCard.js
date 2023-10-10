import React from 'react'

export default function LabCard({qna,topic,ind}) {

  return (
    <div>
      <a href={`/pds/lab/${topic}/${ind}`}>{ind}. {qna.Question}</a>
    </div>
  )
}
