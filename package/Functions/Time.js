/**
 * Function to find how  many days are left
 *
 * @param {string}  input the  date
 * @return {string} message with how many days 
 *
 */
export function daysLeft(_date){
    const dDay = new Date(_date).getTime();
    const today = new Date ().getTime();
    const daysLeft = Math.floor((dDay-today)/86400000);
    if(today> dDay){
        return `The event has already occurred. Choose a future date.`
    }
    return `${daysLeft} days are left!!`

}
