<link rel="stylesheet" type="text/css" href="dateTimePicker/jquery.datetimepicker.css"/ >
<script src="dateTimePicker/jquery.js"></script>
<script src="dateTimePicker/build/jquery.datetimepicker.full.min.js"></script>


<script>
    jQuery('#date').datetimepicker({
        formatDate:'Y/m/d',
        minDate:'-1970/01/01',//yesterday is minimum date(for today use 0 or -1970/01/01),
        step: 10,
        validateOnBlur:false,
        startDate:new Date()
    });
    jQuery('#returnDate').datetimepicker({
        formatDate:'Y/m/d',
        minDate:'-1970/01/01',//yesterday is minimum date(for today use 0 or -1970/01/01),
        step: 10,
        validateOnBlur:false,
        startDate:new Date()
    });


</script>