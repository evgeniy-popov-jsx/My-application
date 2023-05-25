export function getDay(date: Date){
    const day = date.getDate();

    return day;
};

export function getMonth(date: Date){
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return MONTHS[date.getMonth()];
};
