    var anchorPoint = new google.maps.Point(23, 23);

    var car = {
        //path: "M18 47c0 1.2.8 2 2 2s2-.8 2-2V28h2v19c0 1.2.8 2 2 2s2-.8 2-2V15h1v11.8c0 2.4 3 2.4 3 0v-12c0-2.8-2-4.8-5-4.8h-8c-2.8 0-5 1.7-5 4.6V27c0 2 3 2 3 0V15h1v32z",
        path: "m0.78134,20.80632c0,-0.117064 0.071518,-0.230272 0.124999,-0.351189c0.075634,-0.171003 0.124999,-0.292656 0.124999,-0.351189c0,-0.058531 0.09289,-0.106747 0.124999,-0.234127c0.014359,-0.056961 0.018307,-0.192734 0.062499,-0.234121c0.044194,-0.041388 0.014665,-0.125975 0.0625,-0.234127c0.033824,-0.076473 0.114987,-0.234879 0.124999,-0.292656c0.031659,-0.182701 0.062499,-0.292656 0.062499,-0.409719c0,-0.058533 0.062499,-0.234125 0.062499,-0.46825c0,-0.058531 -0.010011,-0.17635 0,-0.234123c0.031659,-0.182703 0.043283,-0.245014 0.124999,-0.351189c0.051681,-0.06715 0.021094,-0.135208 0.124999,-0.292656c0.046468,-0.070414 0.531219,-0.876143 0.562495,-1.580344c0.005195,-0.116961 0.20211,-0.464463 0.437496,-1.287688c0.066655,-0.233117 0.173139,-0.528347 0.187498,-0.585313c0.032109,-0.127379 0.04814,-0.177159 0.062499,-0.234125c0.032109,-0.127378 0.298138,-0.411285 0.312497,-0.46825c0.032109,-0.127378 0.139011,-0.228437 0.187498,-0.351188c0.268216,-0.67902 0.382431,-1.241764 0.499995,-1.580343c0.043218,-0.124465 0.187499,-0.292657 0.187499,-0.292657c0,-0.058532 0.0625,-0.234125 0.0625,-0.234125c0.124999,-0.058531 0.124999,-0.175593 0.187498,-0.234125c0,0 0.0625,-0.058531 0.0625,-0.117063c0,-0.058531 0.0625,-0.117063 0.0625,-0.117063c0.0625,-0.117062 0.153674,-0.15765 0.187499,-0.234125c0.023918,-0.054075 0.038582,-0.121517 0.0625,-0.175592c0.033824,-0.076475 0.608913,-1.667761 0.937492,-2.165658c0.146945,-0.222666 0.117713,-0.433455 0.374997,-0.995031c0.19868,-0.433663 0.351079,-0.706831 0.374997,-0.760907c0.033824,-0.076475 0.129756,-0.094664 0.187498,-0.117063c0.08166,-0.031676 0.006118,-0.165318 0.124999,-0.234125c0.053165,-0.030772 0.0625,-0.058531 0.124999,-0.117062c0.0625,-0.058531 0.091175,-0.040587 0.124999,-0.117063c0.023918,-0.054076 0.018305,-0.192738 0.062499,-0.234126c0.044194,-0.041388 0.038582,-0.121518 0.0625,-0.175593c0.033824,-0.076475 0.0625,-0.058531 0.0625,-0.175594c0,-0.058532 0.080805,-0.075675 0.124999,-0.117062c0.044194,-0.041388 0.009018,-0.113208 0.0625,-0.234126c0.075634,-0.171003 -0.167447,-0.294277 0.374997,-1.697407c0.847324,-2.191759 1.163573,-1.985607 1.18749,-1.931532c0.067649,0.152949 0.155389,0.106746 0.187498,0.234125c0.028719,0.113931 0.028675,0.099119 0.062499,0.175594c0.023917,0.054076 0,0.117063 0,0.175594c0,0.058531 0.100665,0.243448 0.187499,0.409719c0.099006,0.189578 0.319738,0.583196 0.374996,0.760906c0.072047,0.231707 0.084072,0.420078 0.187498,0.702375c0.045355,0.123796 0.214911,0.223449 0.437496,0.760906c0.071467,0.172567 0.157062,0.385955 0.249998,0.526782c0.103906,0.157449 0.124182,0.336971 0.187498,0.702375c0.030034,0.173327 0.053246,0.364554 0.124999,0.526782c0.033825,0.076475 0.139647,0.288993 0.499996,1.580344c0.065155,0.233489 0.069741,0.34907 0.124999,0.526782c0.072047,0.231706 0.093513,0.287258 0.124999,0.526781c0.007636,0.058093 -0.009254,0.247492 0.062499,0.409719c0.033824,0.076474 0.014664,0.301566 0.062499,0.409719c0.067649,0.15295 0.124999,0.234125 0.124999,0.46825c0,0.117062 -0.03317,0.310476 0.0625,0.526781c0.067649,0.15295 0.187498,0.292656 0.187498,0.526781c0,0.058532 0.08145,0.162093 0.124999,0.234125c0.126964,0.210007 0.071518,0.230269 0.124999,0.351188c0.075634,0.171003 0.134017,0.288801 0.187498,0.409719c0.075633,0.171003 0.03378,0.237256 0.062499,0.351188c0.032109,0.12738 0.247196,0.324799 0.312498,0.526782c0.018111,0.05602 0.080805,0.192737 0.124998,0.234124c0.044194,0.041389 0.135818,0.401099 0.187499,0.468251c0.081715,0.106175 0.060534,0.258244 0.187498,0.468249c0.043549,0.072031 0.052487,0.17635 0.062499,0.234125c0.031659,0.182702 0.048141,0.235691 0.0625,0.292656c0.032108,0.127379 -0.009254,0.188961 0.062499,0.351189c0.033825,0.076474 0.124999,0.117063 0.124999,0.175593c0,0.058531 0.036612,0.034286 0.124999,0.117063c0.044193,0.041388 0,0.175593 0,0.234125c0,0 0.091174,0.040587 0.124999,0.117063c0.023918,0.054075 0.080805,0.075674 0.124999,0.117062c0.088387,0.082776 0.07853,0.222244 0.124999,0.292656c0.103907,0.157451 0.16255,0.307628 0.249997,0.40972c0.161245,0.18825 0.14395,0.396217 0.187499,0.468248c0.126966,0.210005 0.111865,0.648436 0.187498,0.819439c0.053481,0.120916 0.216173,0.274714 0.249998,0.351189c0.047834,0.108149 0.016031,0.16371 0.062499,0.234125c0.103905,0.157448 0.062499,0.234123 0.062499,0.234123c0,0.058531 0.028675,0.099121 0.0625,0.175596c0.023917,0.054075 0,0.117062 0,0.175594c0,0.058527 0,0.11706 0.062499,0.11706c0,0 0.030391,0.048216 0.0625,0.175594c0.014359,0.056965 -0.010011,0.117819 0,0.175594c0.063317,0.365404 0.124999,0.526781 0.124999,0.585314c0,0.058531 0.062499,0.175592 0.062499,0.234121c0,0.058533 0,0.117065 0,0.175596c0,0.058531 0.030391,0.048216 0.062499,0.175594c0.014359,0.056965 0.182349,0.373831 0.249999,0.526781c0.023918,0.054075 -0.023916,0.121519 0,0.175592c0.033823,0.076475 0.062498,0.117064 0.062498,0.117064c0,0 0,-0.058533 0,-0.234123c0,0 0,-0.117064 0,-0.175594c0,-0.058533 0,-0.117065 0,-0.292658c0,-0.058529 -0.011625,-0.157598 -0.124998,-0.234125c-0.071704,-0.048397 -0.062499,-0.292656 -0.124999,-0.409718c-0.062499,-0.117064 -0.124999,-0.292658 -0.124999,-0.351189c0,-0.175592 -0.071518,-0.17174 -0.124999,-0.292656c-0.075633,-0.171005 -0.124999,-0.234125 -0.187498,-0.292656c-0.0625,-0.058533 -0.073318,-0.049911 -0.124999,-0.117065c-0.081714,-0.106174 -0.062499,-0.175592 -0.062499,-0.292654c0,-0.058533 -0.043283,-0.18648 -0.124999,-0.292656c-0.103362,-0.134304 -0.129757,-0.211727 -0.187499,-0.234127c-0.081658,-0.031673 -0.163581,-0.180048 -0.187498,-0.234123c-0.033824,-0.076475 -0.143304,-0.134207 -0.187498,-0.175594c-0.044194,-0.041389 -0.04334,-0.143917 -0.124999,-0.175594c-0.057741,-0.022398 -0.153674,-0.157652 -0.187498,-0.234125c-0.023917,-0.054075 -0.0625,-0.117062 -0.0625,-0.175592c0,0 -0.080805,-0.25127 -0.124999,-0.292656c-0.088388,-0.082777 0,-0.175594 0,-0.292658c0,-0.058531 0,-0.117062 0,-0.117062c0,-0.117064 0,-0.175594 0,-0.234124c0,-0.234127 0,-0.292657 0,-0.40972c0,-0.058532 0,-0.234125 0,-0.292656c0,0 -0.028675,-0.040588 -0.062499,-0.117062c-0.047835,-0.108152 0.014359,-0.118629 0,-0.175595c-0.032108,-0.127378 -0.124998,-0.117062 -0.187498,-0.175593c-0.0625,-0.058532 -0.080806,-0.134206 -0.124999,-0.175594c-0.044194,-0.041388 -0.048141,-0.060097 -0.0625,-0.117062c-0.032108,-0.127379 -0.124998,-0.175594 -0.124998,-0.234125c0,-0.117064 -0.04334,-0.143918 -0.124999,-0.175594c-0.057742,-0.022399 -0.091175,-0.040587 -0.124999,-0.117063c-0.023917,-0.054076 -0.033781,-0.120194 -0.0625,-0.234125c-0.032108,-0.127378 -0.077163,-0.125973 -0.124998,-0.234125c-0.033825,-0.076475 -0.0625,-0.117062 -0.0625,-0.117062c0,-0.117064 -0.080805,-0.134206 -0.124999,-0.175594c-0.044194,-0.041388 -0.124999,-0.058531 -0.124999,-0.117062c0,-0.058533 0,-0.117064 0,-0.117064c-0.062499,0 -0.062499,-0.058532 -0.062499,-0.058532c-0.062499,0 -0.080806,-0.075674 -0.124999,-0.117062c-0.044193,-0.041388 -0.062499,-0.058532 -0.062499,-0.058532c0,-0.058531 -0.124999,-0.058531 -0.187499,-0.058531c-0.062499,0 -0.062499,-0.058532 -0.062499,-0.058532c-0.062499,0 -0.135818,0.008619 -0.187498,-0.058531c-0.081716,-0.106176 -0.129757,-0.094663 -0.187499,-0.117063c-0.081659,-0.031677 -0.10108,-0.062986 -0.124998,-0.117064c-0.033825,-0.076474 -0.105839,-0.085384 -0.187499,-0.117062c-0.057741,-0.022399 -0.124999,0 -0.249997,0c-0.0625,0 -0.067519,-0.139094 -0.312498,-0.234124c-0.115484,-0.0448 -0.187498,0 -0.249997,0c-0.0625,0 -0.136624,0.017994 -0.249998,-0.058533c-0.071704,-0.048399 -0.168338,-0.085385 -0.249998,-0.117063c-0.057741,-0.022398 -0.249998,-0.058531 -0.249998,-0.058531c-0.062499,0 -0.187498,0 -0.249997,0c-0.0625,0 -0.187499,-0.058532 -0.249998,-0.058532c-0.062499,0 -0.19018,0.016961 -0.249998,0c-0.215675,-0.061155 -0.249997,-0.117062 -0.312497,-0.117062c-0.062499,0 -0.105839,-0.026855 -0.187498,-0.058532c-0.057742,-0.022399 -0.187498,0 -0.249998,0c-0.062499,0 -0.124999,0 -0.249998,0c0,0 -0.124998,-0.058531 -0.187498,-0.058531c-0.062499,0 -0.062499,0 -0.124999,0c-0.0625,0 -0.187499,0 -0.187499,0c-0.0625,0 -0.187499,0 -0.249998,0c0,0 -0.0625,0 -0.249998,-0.058532c0,0 -0.067257,0.022398 -0.124999,0c-0.081659,-0.031676 -0.124999,-0.058531 -0.124999,-0.058531c-0.0625,0 -0.187499,0 -0.249998,0c0,0 -0.0625,0 -0.124999,0c-0.0625,0 -0.124999,0 -0.124999,0c-0.187499,0 -0.249998,0 -0.312497,0c-0.0625,0 -0.187499,0 -0.249998,0c-0.124999,0 -0.187498,0 -0.187498,0c-0.0625,0 -0.124999,0 -0.187499,0c-0.0625,0 -0.0625,0 -0.124999,0c-0.0625,0 -0.124999,0 -0.187498,0c-0.0625,0 -0.187499,0 -0.249998,0c0,0 -0.0625,0 -0.124999,0c-0.062499,0 -0.124999,0 -0.124999,0c-0.124999,0 -0.187499,0 -0.249998,0c0,0 -0.0625,0 -0.124999,0c-0.0625,0 -0.124999,0 -0.187499,0c-0.0625,0 -0.124999,-0.058532 -0.124999,-0.058532c-0.0625,0 -0.0625,0 -0.0625,-0.058532l0,-0.05853",
        scale: 1,
        fillColor: '#000000',
        anchor: this.anchorPoint
    };

    var carOnLine = {
        icon: this.car,
        offset: '50%'
    };
