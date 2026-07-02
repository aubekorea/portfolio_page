/**
 * Created by JUE on 2015-12-01.
 */

// �대깽�� 痍⑥냼
function KHI_DEFAULT(event) {
    if (event.preventDefaut) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

function KHI_PW(id, pw, msg) {
    var id = id.value, pw = pw.value;
    var checkNumber = pw.search(/[0-9]/g);
    var checkEnglish = pw.search(/[a-z]/ig);
    //var checkSpecial = pw.search(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/g);
    if( id == '' || pw == '' )
    {
        alert(msg);
        return true;
    }
    if( !/^[a-zA-Z0-9]{5,12}$/.test(pw) )
    {
        alert('�レ옄�� �곷Ц�� 議고빀�쇰줈 5~12�먮━瑜� �낅젰諛붾엻�덈떎.');
        return true;
    }
    if( /(\w)\1\1\1/.test(pw) ){
        alert('媛숈� 臾몄옄瑜� �곗냽�댁꽌 4踰� �댁긽 �ъ슜�섏떎 �� �놁뒿�덈떎.');
        return true;
    }
    if( checkNumber < 0 || checkEnglish < 0 )
    {
        alert('�レ옄�� �곸뼱瑜� �쇱슜�댁꽌 �낅젰諛붾엻�덈떎.');
        return true;

    }
    /*if( checkSpecial < 0 )
     {
     alert(1);
     }*/
    if ( pw.search(id) > -1 )
    {
        alert('鍮꾨�踰덊샇�� �꾩씠�붽� �ы븿�섏뼱 �덉뒿�덈떎.');
        return true;

    }

    return false;
}

// 鍮� 臾몄옄�� 寃���
function KHI_empty(input, msg) {
    var value = input.value;

    if(value == '') {
        alert(msg);
        input.focus();
        return true;
    }
    return false;
}

// 硫붿씪
function KHI_mail(input, msg) {
    var value = input.value;

    var regex = /[\w]/;
    if(value.length==0 || !regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

// �대찓��
function KHI_Email(input, msg) {
    var value = input.value;
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if(regex.test(value)) {
        return false;
    }
    alert(msg);
    return true;

}
// �꾩씠�� id
function KHI_id(input, msg) {
    var value = input.value;
    var length = input.value.length;

    var regex = /[^0-9|a-z]/;
    if(length < 5 || regex.test(value) || value == '') {
        input.focus();
        alert(msg);
        return true;
    }
    return false;
}


// 湲몄씠 寃���
function KHI_length(input, msg, min_length, max_length) {
    var length = input.value.length;

    if(max_length) {
        if(min_length > length || length > max_length) {
            alert(msg);
            input.focus();
            return true;
        }
    } else {
        if(min_length > length) {
            alert(msg);
            input.focus();
            return true;
        }

    }
    return false;
}


// �レ옄 寃���
// �レ옄媛� �꾨땶 媛믪씠 �덉쓣寃쎌슦 true
function KHI_number(input, msg) {
    var value = input.value;

    var regex = /[^0-9]/;
    if(value=='' || regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }

    return false;
}

// �몃뱶�� 寃���
// 湲몄씠媛� 4�� �レ옄媛� �꾨땺寃쎌슦 true
function KHI_phone(input, msg) {
    var value = input.value;

    var regex = /[0-9]{4}/;
    if(value.length != 4 || !regex.exec(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;
}

// �쒓� �대쫫
function KHI_KoName(input, msg) {
    var value = input.value;

    var regex = /[媛�-��]{2,4}$/;
    if(value.length > 8 || !regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

// �곸뼱 �대쫫
function KHI_EnName(input, msg) {
    var value = input.value;

    var regex = /[^a-z|A-Z|\s]/;
    if(regex.test(value)) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;

}

// 鍮꾨�踰덊샇
function KHI_PassConfirm(input, input_confirm, msg) {
    var pass = input.value;
    var passConfirm = input_confirm.value;

    if(pass == passConfirm) {
        return false;
    }
    alert(msg);
    input_confirm.value ="";
    input_confirm.focus();
    return true;

}



// �대�吏�
function KHI_image(input, msg) {
    var extension = ['bmp', 'jpeg', 'jpg', 'gif', 'png'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf('.')+1).toLocaleLowerCase();

    for(var i = 0, max = extension.length; i < max; ++i) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}

// 臾몄꽌
function KHI_document(input, msg) {
    var extension = ['bmp', 'jpeg', 'jpg', 'gif', 'png'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf('.')+1).toLocaleLowerCase();

    for(var i = 0, max = extension.length; i < max; ++i) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}

//�숈쁺��
function KHI_video(input, msg) {
    var extension = ['mp4'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf('.')+1).toLocaleLowerCase();

    if(input.files[0].size > 20900000) {
        alert("20mb �댄븯 �뚯씪留� �깅줉媛��ν빀�덈떎.");
        input.value = null;
        input.focus();
        return true;
    }

    for(var i = 0, max = extension.length; i < max; ++i) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}

// ���됲듃
function KHI_select(input, msg) {
    var value = input.value;

    if(!value) {
        alert(msg);
        input.focus();
        return true;
    }
    return false;
}

// �쇰뵒��
function KHI_radio(name, msg) {

    var input = document.getElementsByName(name);

    for(var i =0; i < input.length; i++) {
        if(input[i].checked == true) {
            return false;
        }
    }

    alert(msg);
    return true;


}

// �대�吏�, 臾몄꽌 �뚯씪
function check_file (input, msg) {
    var extension = ['bmp', 'jpeg', 'jpg', 'gif', 'png', 'hwp', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'];
    var value = input.value;
    var type = value.slice(value.lastIndexOf(".") + 1).toLocaleLowerCase();

    for(var i = 0, max = extension.length; i < max; ++i ) {
        if(extension[i] == type) {return false;}
    }
    alert(msg);
    input.value = null;
    input.focus();
    return true;
}
















