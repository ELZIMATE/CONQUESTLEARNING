import { useEffect, useState } from "react"
import { fetchMonthLogs, fetchRoutines } from "../../hooks/backendapi/Featuresapi"

const MonthCalendar = ({ selectedDate, setSelectedDate, user }) => {
    const today = new Date()
    const [viewYear, setViewYear] = useState(today.getFullYear())
    const [viewMonth, setViewMonth] = useState(today.getMonth() + 1)
    const [logsByDate, setLogsByDate] = useState({})
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        const load = async () => {
            const logs = await fetchMonthLogs(viewYear, viewMonth)
            const map = {}
            logs.forEach(row => { map[row.date] = row })
            setLogsByDate(map)

            const routineData = await fetchRoutines()
            const loaded = routineData.flatMap(r => r.tasks || [])
            setRoutines(loaded)
        }
        if (user?.id) load()
    }, [viewYear, viewMonth, user?.id])

    const daysInMonth = new Date(viewYear, viewMonth, 0).getDate()
    const firstDayOfWeek = new Date(viewYear, viewMonth - 1, 1).getDay()

    const cells = []
    for (let i = 0; i < firstDayOfWeek; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(d)

    return (
        <div>
            <div>
                <button onClick={() => { if (viewMonth === 1) { setViewMonth(12); setViewYear(y => y - 1) } else setViewMonth(m => m - 1) }}>←</button>
                <span>{viewYear}-{String(viewMonth).padStart(2, '0')}</span>
                <button onClick={() => { if (viewMonth === 12) { setViewMonth(1); setViewYear(y => y + 1) } else setViewMonth(m => m + 1) }}>→</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d}><b>{d}</b></div>)}
                {cells.map((day, i) => {
                    if (!day) return <div key={i}/>
                    const dateStr = `${viewYear}-${String(viewMonth).padStart(2,'0')}-${String(day).padStart(2,'0')}`
                    const dayName = new Date(dateStr).toLocaleDateString('en-CA', { weekday: 'long' })
                    const log = logsByDate[dateStr]
                    const todos = Array.isArray(log?.ToDos) ? log.ToDos : []
                    const routineTodos = routines.filter(r => !r.days || r.days.includes(dayName))
                    const allTasks = [...todos, ...routineTodos.filter(r => !todos.find(t => t.task === r.task))]
                    const isSelected = dateStr === selectedDate

                    return (
                        <div key={dateStr} onClick={() => setSelectedDate(dateStr)}
                            style={{ border: isSelected ? '2px solid blue' : '1px solid #ccc', padding: '4px', cursor: 'pointer', minHeight: '60px' }}>
                            <b>{day}</b>
                            {allTasks.slice(0, 3).map((t, j) => (
                                <div key={j} style={{ fontSize: '10px' }}>
                                    {t.complete ? '✅' : '⬜'} {t.task}
                                </div>
                            ))}
                            {allTasks.length > 3 && <div style={{ fontSize: '10px' }}>+{allTasks.length - 3} more</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MonthCalendar