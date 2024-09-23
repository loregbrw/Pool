import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Main } from '../../components/main';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

// interface Event {
//     id: number;
//     title: string;
//     start: Date;
//     desc: string;
//     color: string;
// }

const localizer = momentLocalizer(moment);

export const Calendars = () => {
    
    // const [events, setEvents] = useState<Event[]>([]);
    // const [eventSelect, setEventSelect] = useState<Event | null>(null);

    // const doFetchEvents = async() => {
    //     const eventsFetched: Event[] = await fetchEvents();
    //     setEvents(eventsFetched);
    // }

    // useEffect(() => {
    //     doFetchEvents();
    // }, []);

    // const handleEventClick = (event: Event) => {
    //     console.log(event);
    //     setEventSelect(event);
    // }

    // const handleEventClose = () => {
    //     console.log("handleEventClose");
    //     setEventSelect(null);
    // }

    return (
        <>
            <Main>
                <Calendar
                    localizer={localizer}
                    events={[]} 
                    startAccessor="start"
                    endAccessor="end"
                    style={{  height: '70vh', width: "50vw", padding: '20px', display: "flex", gap: "10px" }}
                    defaultView="month" 
                />
                {/* {eventSelect && (
                    <EventModal
                        event={eventSelect}
                        onClose={handleEventClose}
                    />
                )} */}
            </Main>
        </>
    )

}