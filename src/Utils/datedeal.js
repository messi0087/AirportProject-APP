class datedeal{
    static formatDate(item) {
        let date;
        let dates =item.toString().split(' ');
        let mouth=0;
        let week='';
        switch(dates[1])
        {
            case 'Jan':mouth=1;break;
            case 'Feb':mouth=2;break;
            case 'Mar':mouth=3;break;
            case 'Apr':mouth=4;break;
            case 'May ':mouth=5;break;
            case 'Jun':mouth=6;break;
            case 'Jul':mouth=7;break;
            case 'Aug':mouth=8;break;
            case 'Sept':mouth=9;break;
            case 'Oct':mouth=10;break;
            case 'Nov':mouth=11;break;
            case 'Dec':mouth=12;break;
        }

        switch(dates[0])
        {
            case 'Mon':week='星期一';break;
            case 'Tue':week='星期二';break;
            case 'Wed':week='星期三';break;
            case 'Thu':week='星期四';break;
            case 'Fri':week='星期五';break;
            case 'Sat':week='星期六';break;
            case 'Sun':week='星期天';break;
        }
        date= dates[3]+' '+ mouth + ' ' +dates[2]+' '+week;

        return date;
    }
}
export default datedeal;
