import moment from 'moment'
import React from 'react'

function Countdowns() {
    var timetest = moment().format('ddd MMM D YYYY HH:mm:ss')
    var maketime = moment().day()
    var holder
    var newtime
    var hoursfromnow
    if (maketime >= 4) {
        holder = moment().day(4 + 7).date()
        newtime = moment(holder, "DD").add(5, 'hours').format('ddd MMM D YYYY HH:mm:ss')
        hoursfromnow = moment(holder, "DD").add(5, 'hours').diff(moment(), 'seconds')
        // hoursfromnow = moment(moment().day(4 + 7).date(), "DD").add(5, 'hours').diff(moment(), 'seconds')
    } else {
        holder = moment().day(4).date()
        newtime = moment(holder, "DD").add(5, 'hours').format('ddd MMM D YYYY HH:mm:ss')
        hoursfromnow = moment(holder, "DD").add(5, 'hours').diff(moment(), 'seconds')
    }
    // ddd MMM D YYYY HH:mm:ss
    // .diff(moment(), 'seconds')
    // var tomorrow = moment()
    return (
        <div>
            {timetest}
            <br></br>
            {maketime}
            <br />
            {newtime}
            <br />
            {hoursfromnow}
        </div>
    )
}

export default Countdowns