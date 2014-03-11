$(document).ready(function()    {
    // Remove forms
    $('#mainForm').remove();
    $('#done').remove();
    htmlText = "The submission of answers is now closed. See us again next year!";
    $('#form').html(htmlText);

    // Uncomment next block of comment to re-enable form submission
    /* 
    $('#imagetextbox').hide();
    $('#done').hide();
    $('#inclimage').click(function()    {
        if($(this).is(':checked'))    {
            alert("Should you wish to be distinguished easier, you may include a photo of you and to make things easy, \nright click the desired picture > View Image > Paste the URL here");
            $('#imagetextbox').fadeIn();
        }
        else
            $('#imagetextbox').fadeOut();
    });
    $('#mainForm').submit(function()    {
        var body = $('#answer').val();
        var image = $('#imagetextbox').val();
        var name = $('#name').val();
        var school = $('#school').val();
        var includeimage = $('#inclimage').is(':checked');
        var region = $('#region').val();
        if(name == null || name == '')    {
            alert("Please input your name");
            return false;
        }
        else if(school == null || school == '')    {
            alert("Please input your school");
            return false;
        }
        else if(body == null || body == '')    {
            alert("Please tell us what you think before submitting");
            return false;
        }
        else if(includeimage == true  && (image == null || image == ''))    {
            alert("Please include a link for the photo.");
            return false;
        }
        $.ajax({
            type: 'post',
            url: 'http://nyc.org.ph/wp-content/themes/twentytwelve/process.php',
            data: {
                body: body,
                image: image,
                name: name,
                school: school,
                includeimage: includeimage,
                region: region
            },
            dataType: 'json',
            success: function(data)    {
                if(data == 'Failed')
                    alert("Oops! Something went wrong. Please check back again later!");
                else if(data == 'Duplicate')
                    alert("You have already sent the same message. Please try again in a few hours.");
                else if(data == 'Done')    {
                    $('#mainForm').fadeOut('slow', function()    {
                        $('#done').fadeIn('slow');
                    });
                }
            },
            error: function() {
                alert('Oops! Something went wrong. Please check back again later!');
            }
        });
        return false;
    });
    */
});
