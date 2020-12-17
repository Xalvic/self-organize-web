import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import TextareaAutosize from 'react-textarea-autosize';
import './worklogs.scss';
import axios from 'axios';
import { ListFormat } from 'typescript';

const WorkLogs = () => {
    const [showTimer, setShowTimer] = useState(false);
    const [open, setOpen] = useState(false);
    const [timeLogTemp, setTimeLogTemp] = useState('');
    const container: any = useRef(null);
    let messagesEnd: any = useRef(null);
    const [widther, setWidther] = useState(100);

    const [startTime, setStartTime]: any = useState(null);
    const [stopTime, setStopTime]: any = useState(null);

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const increment:any = useRef(null);

    const handleButtonClick = () => {
        setOpen(!open);
      };
    const handleClickOutside = (event: any) => {
        // if (container.current && !container.current.contains(event.target)) {
        //   setOpen(false)
        // }
        if (container.current.contains(event.target)) {
            return;
          } else {
            setOpen(false);
          }
      };

    const handleStart = () => {
        setStartTime(new Date(Date.now()));
        console.log(startTime);
        setIsActive(true)
        setIsPaused(true)
        increment.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
    }
    
      const handlePause = () => {
        clearInterval(increment.current)
        setIsPaused(false)
      }
    
      const handleResume = () => {
        setIsPaused(true)
        increment.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }
    
      const handleReset = () => {
        setStopTime(new Date(Date.now()));
        console.log(startTime);
        console.log(stopTime);
        const data = {
            _id: 15,
            log: workLog,
            startTime: startTime,
            stopTime: stopTime,
            created_At: '2020-11-21T14:05:42.517Z',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: 'red',
                },
                {
                    label: 'Twothing',
                    color: 'yellow',
                },
            ]
        }
        setWorkLogs([...workLogs, data]);
        console.log(workLogs);
        clearInterval(increment.current);
        setShowTimer(!showTimer)
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
        setWorkLog("");
      }
    
      const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes:any = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
        //console.log(timer);
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }



    const todayDate = new Date();

    const [workLog, setWorkLog]:any = useState("");

    const [workLogs, setWorkLogs]:any = useState([]);

    const onInput = (e:any) => {
        setWorkLog(e.target.value);
    }

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiMjhkOGU3NTI3ZDUxZTk4NDQ2OWM3In0sImlhdCI6MTYwNjU3NzY5OSwiZXhwIjoxNjA2Njc3Njk5fQ.gUp_2tI8OWHe1ZynuBZp-rVHc59IocRKvLzeIkm0tMQ';

    const theArray:any = [
        {
            _id: 1,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data',
            created_At: '2020-11-21T14:05:42.517Z',
            marked: false,
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
                {
                    label: 'Threething',
                    color: '#8e44ad',
                }
                ,
                {
                    label: 'Fourthing',
                    color: '#f39c12',
                }
            ]
        },
        {
            _id: 2,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code ',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: true,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
                {
                    label: 'Threething',
                    color: '#8e44ad',
                }
            ]
        },
        {
            _id: 3,
            log: 'Your first instinct, when you start to do something new, should be git init',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Threething',
                    color: '#8e44ad',
                }
                ,
                {
                    label: 'Fourthing',
                    color: '#f39c12',
                }
            ]
        },
        {
            _id: 4,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
                {
                    label: 'Fourthing',
                    color: '#f39c12',
                }
            ]
        },
        {
            _id: 5,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data Your first instinct, when you start to do something new, should be git init.',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
            ]
        },
        {
            _id: 6,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
                {
                    label: 'Threething',
                    color: '#8e44ad',
                }
                ,
                {
                    label: 'Fourthing',
                    color: '#f39c12',
                }
            ]
        },
        {
            _id: 7,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                }
            ]
        },
        {
            _id: 8,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code ',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
                {
                    label: 'Threething',
                    color: '#8e44ad',
                }
                ,
                {
                    label: 'Fourthing',
                    color: '#f39c12',
                }
            ]
        },
        {
            _id: 9,
            log: 'Your first instinct, when you start to do something new, should be git init',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                }
            ]
        },
        {
            _id: 10,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                }
                ,
                {
                    label: 'Fourthing',
                    color: '#f39c12',
                }
            ]
        },
        {
            _id: 11,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data Your first instinct, when you start to do something new, should be git init.',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                }
            ]
        },
        {
            _id: 12,
            log: 'Your first instinct, when you start to do something new, should be git init. You’re starting to write a new paper, you’re writing a bit of code to do a computer simulation, you’re mucking around with some new data',
            created_At: '2020-11-21T14:05:42.517Z',
            startTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            stopTime: 'Tue Dec 15 2020 11:32:12 GMT+0530 (India Standard Time)',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: '#2ecc71',
                },
                {
                    label: 'Twothing',
                    color: '#16a085',
                },
            ]
        }
    ]

    const addBookmark = (id: number) => {
        setWorkLogs(
            workLogs.map((log: any) => {
                if (log._id === id) { log.marked = !log.marked }
                return log;
            })
        )
    }

    const addLogs = () => {
        const data = {
            _id: 15,
            log: workLog,
            created_At: '2020-11-21T14:05:42.517Z',
            marked: false,
            labels: [
                {
                    label: 'Onething',
                    color: 'red',
                },
                {
                    label: 'Twothing',
                    color: 'yellow',
                },
            ]
        }
        setWorkLog(null);
        setWorkLogs([...workLogs, data]);
        scrollToBottom();
        console.log(workLogs);
    }

    useEffect(() => {
        fetchWorkLogs();
        // document.addEventListener("mousedown", handleClickOutside);
        // console.log(todayDate);

        // return () => {
        //     document.removeEventListener("mousedown", handleClickOutside);
        // }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchWorkLogs = () => {
    //     axios.get(
    //         `http://localhost:5000/api/personal`,
    //         {
    //             headers: {
    //               token: token 
    //             }
    //           })
    //   .then(res => {
    //         const data = res.data;
    //         console.log(data);
    //         setWorkLogs(data);
    //   })
    setWorkLogs(theArray);
    }

    const scrollToBottom = () => {
        //Element.prototype.scrollIntoView = jest.fn();
        //window.HTMLElement.prototype.scrollIntoView = function() {};
        
        //messagesEnd.scrollIntoView({ behavior: "smooth" });
        console.log("New One")
      }
    const lol = [
        {
            start: 'Tue Dec 15 2020 10:00:00 GMT+0530 (India Standard Time)',
            stop: 'Tue Dec 15 2020 11:04:12 GMT+0530 (India Standard Time)',
        },
        {
            start: 'Tue Dec 15 2020 11:10:12 GMT+0530 (India Standard Time)',
            stop: 'Tue Dec 15 2020 16:04:12 GMT+0530 (India Standard Time)',
        },
        {
            start: 'Tue Dec 15 2020 16:10:12 GMT+0530 (India Standard Time)',
            stop: 'Tue Dec 15 2020 24:00:00 GMT+0530 (India Standard Time)',
        },
        ]

    //   const theStyler = {
    //     width: widther + 'px',
    //   }


    return (
        <div className="worklogs-container">
            {/* <div className="upper-row"> */}

                <div className="logs-header">
                    <p className="header-title">Work Logs</p>
                    <p className="moment-time">{moment(todayDate).format("ddd, MMM DD")}</p>

                    <div id="time-spend-bar">
                        {lol.map((lol: any) => (
                            <div
                            className="bars"
                            style={{ 
                                width:  
                                (moment(lol.stop).diff(moment().startOf('day'), 'seconds') - 
                                moment(lol.start).diff(moment().startOf('day'), 'seconds')) / 86400 * 100 + '%'}}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="logs-wrapper">
                
                    {workLogs.map((log: any) => (
                        <div className={log.marked ? 'single-log-marked single-log' : 'single-log'} key={log._id}>

                            <div className="left-box">
                                
                                <p className="left-timer">
                                
                                {moment(log.startTime).format("hh:mm a")} to {moment(log.stopTime).format("hh:mm a")}
                                </p>

                            </div>
                            
                            <div className="right-box">

                                    <p className="log-content">{log.log}</p>
                                    <div className="below-row">
                                    
                                            <p className="log-date">{moment(log.created_At).format("hh:mm a")}</p>

                                            <div className="labels">
                                                {log.labels.map((label: any) => (
                                                    <span 
                                                    className="label"
                                                    style={{ background: `${label.color}` }}
                                                    >{label.label}</span>    
                                                ))}
                                            </div>
                                    </div>

                            </div>

                            <div className="right-menu" ref={container}>
                                    <i onClick={handleButtonClick} className="fas fa-ellipsis-v log-icons-more"></i>

                                    { log.marked === false && (<i onClick={() => addBookmark(log._id)} className="far fa-bookmark log-icons-more"></i>) }
                                    { log.marked === true && (<i onClick={() => addBookmark(log._id)} className="fas fa-bookmark log-icons-more"></i>) }
                            </div>
            
                        </div>
                        
                    ))}

                                    {open && (
                                            <div onClick={handleButtonClick} className="container-overlay">

                                                <div className="dropdown">
                                                    <ul>
                                                        <li>Option 1</li>
                                                        <li>Option 2</li>
                                                        <li>Option 3</li>
                                                        <li>Option 4</li>
                                                    </ul>
                                                </div>

                                            </div>
                                    )}

                </div>

                <div style={{ float:"left", clear: "both" }}
                     ref={messagesEnd}>
                </div>

            {/* </div> */}

            <div className="input-container">

                    {showTimer &&
                        <div className="the-timer">

                            <p className="the-temp-log">
                            {`${timeLogTemp.substring(0, 40)} ...`}
                            </p>

                            <div className="timer-bottom">

                                <p className="logged-time">{formatTime()}</p>
                        
                                <div className='buttons'>
                                    {
                                        !isActive && !isPaused ?
                                        <button className="time-button" onClick={handleStart}>
                                            <i className="fas fa-play log-icons logtime-icon"></i> Start
                                        </button>
                                        : (
                                            isPaused ? <button className="time-button" onClick={handlePause}><i className="fas fa-pause log-icons logtime-icon"></i> Pause </button> : <button className="time-button" onClick={handleResume}><i className="fas fa-play log-icons logtime-icon"></i> Start </button>
                                            )
                                    }
                                    <button className="time-button stop-button" onClick={handleReset} disabled={!isActive}>
                                        <i className="fas fa-stop log-icons stop-icon logtime-icon"></i> Log
                                    </button>
                                </div>

                            </div>
                    
                        </div>
                    }

                <div className="input-elements">

                    <i className="fas fa-paperclip clickable-pointer log-icons"></i>

                    <TextareaAutosize className="textarea" placeholder="What are doing now ?" onChange={onInput} />

                    <i title="Log time" onClick = {() => { setShowTimer(!showTimer); setTimeLogTemp(workLog);}} className="far fa-clock log-icons clickable-pointer"></i>
            
                    <i title="Log without time" onClick = {addLogs} className="fas fa-paper-plane log-icons clickable-pointer"></i>

                </div>

            </div>

        </div>
    )
}

export default WorkLogs;