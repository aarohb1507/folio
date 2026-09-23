import React from 'react'

const groups = [
  { name: 'languages', items: ['javascript', 'typescript', 'python', 'go', 'sql'] },
  { name: 'backend & data', items: ['node.js', 'nestjs', 'fastify', 'postgresql', 'mongodb', 'redis', 'rabbitmq', 'redis streams'] },
  { name: 'product & ai', items: ['nextjs', 'docker', 'rag pipelines', 'vector search', 'llm orchestration'] }
]

export default function Skills({ items = [] }) {
  const hasSkill = (skill) => items.includes(skill)

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-heading compact-heading">
        <div className="section-label"><span>05</span> toolkit</div>
        <h2 id="skills-heading" className="section-title">what i reach for.</h2>
      </div>
      <div className="skills-groups">
        {groups.map((group) => (
          <div key={group.name} className="skill-group">
            <p>{group.name}</p>
            <ul>{group.items.filter(hasSkill).map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
