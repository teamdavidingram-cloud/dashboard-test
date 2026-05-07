import './App.css'

type KpiCard = {
  title: string
  value: string
  delta: string
  deltaType: 'positive' | 'negative' | 'neutral'
  subtitle: string
  accent: 'blue' | 'amber' | 'green' | 'purple'
  sparkline: number[]
}

type ProgressPoint = {
  period: string
  set: number
  completed: number
  blocked: number
  improvement: number
}

type StatusBreakdown = {
  label: string
  value: number
  color: string
}

type TeamPerformance = {
  team: string
  completed: number
  blocked: number
  improving: number
}

type ImprovementItem = {
  area: string
  count: number
  color: string
}

type TaskRow = {
  name: string
  client: string
  assignedTo: string
  status: 'Set' | 'Blocked' | 'Completed' | 'Needs Improvement' | 'In Progress'
  priority: 'High' | 'Medium' | 'Low'
  dueDate: string
  improvementNeeded: string
  progress: number
  notes: string
}

type ActivityItem = {
  title: string
  meta: string
  time: string
  tone: 'good' | 'warning' | 'neutral'
}

const kpis: KpiCard[] = [
  {
    title: 'Tasks Set',
    value: '248',
    delta: '+12.4%',
    deltaType: 'positive',
    subtitle: '32 new tasks created this week',
    accent: 'blue',
    sparkline: [32, 36, 41, 38, 44, 47, 52],
  },
  {
    title: 'Tasks Blocked',
    value: '19',
    delta: '-4.8%',
    deltaType: 'positive',
    subtitle: 'Down from 20 last week',
    accent: 'amber',
    sparkline: [24, 22, 23, 21, 20, 20, 19],
  },
  {
    title: 'Tasks Completed',
    value: '186',
    delta: '+18.2%',
    deltaType: 'positive',
    subtitle: 'Best completion run this quarter',
    accent: 'green',
    sparkline: [118, 126, 132, 145, 151, 168, 186],
  },
  {
    title: 'Needs Improvement',
    value: '43',
    delta: '+6.1%',
    deltaType: 'negative',
    subtitle: 'Mostly follow-up and handoff quality',
    accent: 'purple',
    sparkline: [29, 31, 34, 33, 36, 39, 43],
  },
]

const progressData: ProgressPoint[] = [
  { period: 'Jan', set: 120, completed: 84, blocked: 18, improvement: 22 },
  { period: 'Feb', set: 138, completed: 97, blocked: 20, improvement: 25 },
  { period: 'Mar', set: 156, completed: 118, blocked: 24, improvement: 28 },
  { period: 'Apr', set: 182, completed: 141, blocked: 21, improvement: 31 },
  { period: 'May', set: 210, completed: 162, blocked: 19, improvement: 37 },
  { period: 'Jun', set: 248, completed: 186, blocked: 19, improvement: 43 },
]

const statusBreakdown: StatusBreakdown[] = [
  { label: 'Completed', value: 186, color: '#16a34a' },
  { label: 'In Progress', value: 72, color: '#2563eb' },
  { label: 'Blocked', value: 19, color: '#f59e0b' },
  { label: 'Needs Improvement', value: 43, color: '#8b5cf6' },
]

const teamPerformance: TeamPerformance[] = [
  { team: 'Sales Ops', completed: 46, blocked: 4, improving: 8 },
  { team: 'Client Success', completed: 39, blocked: 6, improving: 11 },
  { team: 'Partnerships', completed: 28, blocked: 3, improving: 7 },
  { team: 'Delivery', completed: 51, blocked: 4, improving: 9 },
  { team: 'Support', completed: 22, blocked: 2, improving: 8 },
]

const improvementPipeline: ImprovementItem[] = [
  { area: 'Follow-up quality', count: 16, color: '#8b5cf6' },
  { area: 'Client response speed', count: 11, color: '#7c3aed' },
  { area: 'Handoff accuracy', count: 9, color: '#6d28d9' },
  { area: 'Documentation gaps', count: 7, color: '#5b21b6' },
]

const taskRows: TaskRow[] = [
  {
    name: 'Renewal outreach for Northwind',
    client: 'Northwind Group',
    assignedTo: 'Aisha Patel',
    status: 'Completed',
    priority: 'High',
    dueDate: '2026-05-04',
    improvementNeeded: 'None',
    progress: 100,
    notes: 'Closed with signed renewal and upsell booked.',
  },
  {
    name: 'Late invoice follow-up',
    client: 'Vertex Health',
    assignedTo: 'Jonas Meyer',
    status: 'Blocked',
    priority: 'High',
    dueDate: '2026-05-06',
    improvementNeeded: 'Dependency on finance approval',
    progress: 45,
    notes: 'Waiting for revised payment plan from finance.',
  },
  {
    name: 'CRM data cleanup sprint',
    client: 'Internal',
    assignedTo: 'Sofia Romano',
    status: 'Needs Improvement',
    priority: 'Medium',
    dueDate: '2026-05-10',
    improvementNeeded: 'Duplicate lead handling needs tightening',
    progress: 68,
    notes: 'Initial audit done, dedupe logic still inconsistent.',
  },
  {
    name: 'Executive Q2 pipeline review',
    client: 'Helix Capital',
    assignedTo: 'Marcus Lee',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-05-09',
    improvementNeeded: 'Sharper risk commentary',
    progress: 72,
    notes: 'Draft pack ready, commentary revision pending.',
  },
  {
    name: 'Customer onboarding checklist refresh',
    client: 'Luma Retail',
    assignedTo: 'Emma Fischer',
    status: 'Set',
    priority: 'Low',
    dueDate: '2026-05-14',
    improvementNeeded: 'None',
    progress: 18,
    notes: 'Scoped and ready for workshop.',
  },
]

const activityFeed: ActivityItem[] = [
  {
    title: 'Northwind renewal marked completed',
    meta: 'Revenue expansion task closed by Aisha Patel',
    time: '12 minutes ago',
    tone: 'good',
  },
  {
    title: 'Vertex Health follow-up moved to blocked',
    meta: 'Finance sign-off dependency raised by Jonas Meyer',
    time: '36 minutes ago',
    tone: 'warning',
  },
  {
    title: 'Q2 pipeline review reassigned for final commentary',
    meta: 'Marcus Lee requested executive narrative support',
    time: '1 hour ago',
    tone: 'neutral',
  },
  {
    title: 'CRM cleanup sprint flagged for improvement',
    meta: 'Duplicate contact resolution needs another pass',
    time: '2 hours ago',
    tone: 'warning',
  },
]

function Sparkline({ points, accent }: { points: number[]; accent: KpiCard['accent'] }) {
  const width = 120
  const height = 42
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const step = width / Math.max(points.length - 1, 1)

  const colorMap: Record<KpiCard['accent'], string> = {
    blue: '#2563eb',
    amber: '#f59e0b',
    green: '#16a34a',
    purple: '#8b5cf6',
  }

  const d = points
    .map((point, index) => {
      const x = index * step
      const y = height - ((point - min) / range) * (height - 6) - 3
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="sparkline" role="img" aria-label="Trend sparkline">
      <path d={d} fill="none" stroke={colorMap[accent]} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ProgressChart() {
  const width = 720
  const height = 280
  const padding = { top: 16, right: 20, bottom: 34, left: 44 }
  const maxValue = Math.max(...progressData.flatMap((item) => [item.set, item.completed, item.blocked, item.improvement]))
  const innerWidth = width - padding.left - padding.right
  const innerHeight = height - padding.top - padding.bottom
  const stepX = innerWidth / Math.max(progressData.length - 1, 1)

  const buildPath = (key: keyof ProgressPoint) => progressData.map((item, index) => {
    const x = padding.left + index * stepX
    const y = padding.top + innerHeight - ((Number(item[key]) / maxValue) * innerHeight)
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')

  const lineMeta = [
    { key: 'set' as const, label: 'Tasks set', color: '#2563eb' },
    { key: 'completed' as const, label: 'Completed', color: '#16a34a' },
    { key: 'blocked' as const, label: 'Blocked', color: '#f59e0b' },
    { key: 'improvement' as const, label: 'Needs improvement', color: '#8b5cf6' },
  ]

  return (
    <div className="chart-shell">
      <div className="chart-legend">
        {lineMeta.map((line) => (
          <span key={line.key} className="legend-item">
            <span className="legend-dot" style={{ background: line.color }} />
            {line.label}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" role="img" aria-label="Task progress over time">
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
          const y = padding.top + innerHeight - ratio * innerHeight
          const value = Math.round(ratio * maxValue)
          return (
            <g key={ratio}>
              <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} className="grid-line" />
              <text x={padding.left - 10} y={y + 4} className="axis-label axis-label-left">{value}</text>
            </g>
          )
        })}
        {progressData.map((item, index) => {
          const x = padding.left + index * stepX
          return (
            <text key={item.period} x={x} y={height - 10} textAnchor="middle" className="axis-label">{item.period}</text>
          )
        })}
        {lineMeta.map((line) => (
          <path key={line.key} d={buildPath(line.key)} fill="none" stroke={line.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  )
}

function ComparisonBars() {
  const maxValue = Math.max(...progressData.map((item) => Math.max(item.completed, item.blocked)))
  return (
    <div className="bars-grid">
      {progressData.map((item) => (
        <div key={item.period} className="bar-group">
          <div className="bar-pair">
            <div className="bar-track">
              <div className="bar-fill green" style={{ height: `${(item.completed / maxValue) * 100}%` }} />
            </div>
            <div className="bar-track">
              <div className="bar-fill amber" style={{ height: `${(item.blocked / maxValue) * 100}%` }} />
            </div>
          </div>
          <div className="bar-label">{item.period}</div>
        </div>
      ))}
    </div>
  )
}

function DonutChart() {
  const total = statusBreakdown.reduce((sum, item) => sum + item.value, 0)
  const radius = 74
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <div className="donut-layout">
      <svg viewBox="0 0 220 220" className="donut-chart" role="img" aria-label="Task status breakdown">
        <circle cx="110" cy="110" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="22" />
        {statusBreakdown.map((item) => {
          const slice = (item.value / total) * circumference
          const circle = (
            <circle
              key={item.label}
              cx="110"
              cy="110"
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth="22"
              strokeDasharray={`${slice} ${circumference - slice}`}
              strokeDashoffset={-offset}
              transform="rotate(-90 110 110)"
              strokeLinecap="butt"
            />
          )
          offset += slice
          return circle
        })}
        <text x="110" y="102" textAnchor="middle" className="donut-total-label">Total</text>
        <text x="110" y="128" textAnchor="middle" className="donut-total-value">{total}</text>
      </svg>
      <div className="donut-legend">
        {statusBreakdown.map((item) => (
          <div key={item.label} className="donut-legend-item">
            <span className="legend-dot" style={{ background: item.color }} />
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeamBars() {
  const maxValue = Math.max(...teamPerformance.map((item) => item.completed + item.blocked + item.improving))
  return (
    <div className="team-bars">
      {teamPerformance.map((item) => {
        const total = item.completed + item.blocked + item.improving
        return (
          <div key={item.team} className="team-row">
            <div className="team-meta">
              <span>{item.team}</span>
              <strong>{total}</strong>
            </div>
            <div className="stack-track">
              <div className="stack-segment green" style={{ width: `${(item.completed / maxValue) * 100}%` }} />
              <div className="stack-segment amber" style={{ width: `${(item.blocked / maxValue) * 100}%` }} />
              <div className="stack-segment purple" style={{ width: `${(item.improving / maxValue) * 100}%` }} />
            </div>
          </div>
        )
      })}
      <div className="stack-legend">
        <span className="legend-item"><span className="legend-dot" style={{ background: '#16a34a' }} />Completed</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: '#f59e0b' }} />Blocked</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: '#8b5cf6' }} />Needs improvement</span>
      </div>
    </div>
  )
}

function ImprovementBars() {
  const maxValue = Math.max(...improvementPipeline.map((item) => item.count))
  return (
    <div className="improvement-list">
      {improvementPipeline.map((item) => (
        <div key={item.area} className="improvement-row">
          <div className="improvement-head">
            <span>{item.area}</span>
            <strong>{item.count}</strong>
          </div>
          <div className="improvement-track">
            <div className="improvement-fill" style={{ width: `${(item.count / maxValue) * 100}%`, background: item.color }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="dashboard-shell">
      <header className="hero-card">
        <div>
          <p className="eyebrow">Dashboard Test</p>
          <h1>Task performance and delivery intelligence</h1>
          <p className="hero-copy">
            A leadership view of task creation, blockers, completions, and quality issues, with a built-in AI summary explaining what matters most.
          </p>
        </div>
        <div className="hero-filters">
          <button className="filter active">30 days</button>
          <button className="filter">Quarter</button>
          <button className="filter">Year</button>
        </div>
      </header>

      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <article key={kpi.title} className={`kpi-card accent-${kpi.accent}`}>
            <div className="kpi-head">
              <span className="kpi-title">{kpi.title}</span>
              <span className={`kpi-delta ${kpi.deltaType}`}>{kpi.delta}</span>
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <p className="kpi-subtitle">{kpi.subtitle}</p>
            <Sparkline points={kpi.sparkline} accent={kpi.accent} />
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="analytics-column">
          <article className="panel chart-panel panel-large">
            <div className="panel-header">
              <div>
                <p className="section-label">Progress trend</p>
                <h2>Task progress over time</h2>
              </div>
              <span className="pill">Updated hourly</span>
            </div>
            <ProgressChart />
          </article>

          <div className="chart-grid-two">
            <article className="panel chart-panel">
              <div className="panel-header">
                <div>
                  <p className="section-label">Velocity</p>
                  <h2>Completed vs blocked</h2>
                </div>
              </div>
              <ComparisonBars />
            </article>

            <article className="panel chart-panel">
              <div className="panel-header">
                <div>
                  <p className="section-label">Distribution</p>
                  <h2>Task status breakdown</h2>
                </div>
              </div>
              <DonutChart />
            </article>
          </div>

          <div className="chart-grid-two">
            <article className="panel chart-panel">
              <div className="panel-header">
                <div>
                  <p className="section-label">Ownership</p>
                  <h2>Tasks by team</h2>
                </div>
              </div>
              <TeamBars />
            </article>

            <article className="panel chart-panel">
              <div className="panel-header">
                <div>
                  <p className="section-label">Quality watch</p>
                  <h2>Improvement pipeline</h2>
                </div>
              </div>
              <ImprovementBars />
            </article>
          </div>

          <article className="panel table-panel">
            <div className="panel-header table-header-wrap">
              <div>
                <p className="section-label">Operational detail</p>
                <h2>Task table</h2>
              </div>
              <div className="table-actions">
                <input className="search-input" placeholder="Search tasks, clients, owners" />
              </div>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Task Name</th>
                    <th>Client / Account</th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Improvement Needed</th>
                    <th>Progress</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {taskRows.map((row) => (
                    <tr key={`${row.client}-${row.name}`}>
                      <td>{row.name}</td>
                      <td>{row.client}</td>
                      <td>{row.assignedTo}</td>
                      <td><span className={`badge status-${row.status.toLowerCase().replace(/\s+/g, '-')}`}>{row.status}</span></td>
                      <td><span className={`badge priority-${row.priority.toLowerCase()}`}>{row.priority}</span></td>
                      <td>{row.dueDate}</td>
                      <td>{row.improvementNeeded}</td>
                      <td>
                        <div className="progress-cell">
                          <div className="progress-track"><div className="progress-fill" style={{ width: `${row.progress}%` }} /></div>
                          <span>{row.progress}%</span>
                        </div>
                      </td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <aside className="summary-column">
          <article className="panel summary-panel">
            <div className="panel-header">
              <div>
                <p className="section-label">AI executive summary</p>
                <h2>What the dashboard is saying</h2>
              </div>
              <span className="risk-pill moderate">Moderate risk</span>
            </div>

            <section className="summary-section">
              <h3>Overview</h3>
              <p>
                Overall execution is moving in the right direction. Task completions are rising faster than new blockers, but quality-related rework is also climbing and needs management attention.
              </p>
            </section>

            <section className="summary-section">
              <h3>Key insights</h3>
              <ul>
                <li>Completed tasks reached 186, up 18.2% versus the prior period.</li>
                <li>Blocked work has fallen slightly to 19, with the highest concentration in Client Success.</li>
                <li>Forty-three tasks now need further improvement, mostly in follow-up quality and handoff accuracy.</li>
                <li>Delivery and Sales Ops are carrying the strongest completion volume across teams.</li>
              </ul>
            </section>

            <section className="summary-section">
              <h3>Recommended actions</h3>
              <ul>
                <li>Escalate finance-dependent blocked items to remove approval delays.</li>
                <li>Run a short quality sprint on follow-up workflows and documentation standards.</li>
                <li>Shift review capacity toward Client Success to stop rework from compounding.</li>
              </ul>
            </section>
          </article>

          <article className="panel activity-panel">
            <div className="panel-header">
              <div>
                <p className="section-label">Recent activity</p>
                <h2>Live operational feed</h2>
              </div>
            </div>
            <div className="activity-list">
              {activityFeed.map((item) => (
                <div key={item.title} className="activity-item">
                  <span className={`activity-dot ${item.tone}`} />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.meta}</p>
                    <small>{item.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </div>
  )
}

export default App
