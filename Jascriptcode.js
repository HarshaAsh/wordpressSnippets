// Code for number of months and years of experience
{
    var start_date = '2017-10-04';
    
    function dateDiffAsh(date) {
        date = date.split('-');
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var yy = parseInt(date[0]);
        var mm = parseInt(date[1]);
        var dd = parseInt(date[2]);
        var years, months, days;
        // months
        months = month - mm;
        if (day < dd) {
            months = months - 1;
        }
        // years
        years = year - yy;
        if (month * 100 + day < mm * 100 + dd) {
            years = years - 1;
            months = months + 12;
        }
        // days
        days = Math.floor((today.getTime() - (new Date(yy + years, mm + months - 1, dd)).getTime()) / (24 * 60 * 60 * 1000));
        //
        return {years: years, months: months, days: days};
    }
    document.getElementById('monthAsh').innerHTML = dateDiffAsh(start_date).months
    document.getElementById('yearAsh').innerHTML =  dateDiffAsh(start_date).years
}
// Statcounter code
{
    var sc_project=11756259; 
    var sc_invisible=0; 
    var sc_security="7d190102"; 
    var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
    document.write("<script type='text/javascript' src='" + scJsHost + "statcounter.com/counter/counter.js'></"+"script>");
}