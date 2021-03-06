$( document ).ready(function() {

  // Get started!

  // var pixels = $(".pixels");
  //
  //   TweenLite.to(pixels, 2, {x:"50px"})
  //   .add('pixelsIn');

  // Orange pixels 01- 04
  var pixel = $(".pixel-01");
    TweenLite.to(pixel, 4, {
      bezier: {
        autoRotate: 45,
        curviness: 2,
        delay: 0,
        values: [
          {left:196,top:478},
          {left:554,top:170},
          {left:250,top:750},
          {left:500,top:800},
          {left:952,top:600},
          {left:1700,top:500},
          {left:196,top:478}
        ]
      },
      ease: Power4.easeInOut,
      // repeat: -3
    });

    var pixel = $(".pixel-02");
      TweenLite.to(pixel, 4, {
        bezier: {
          autoRotate: 45,
          curviness: 2,
          delay: 0,
          values: [
            {left:1080,top:768},
            {left:450,top:300},
            {left:100,top:250},
            {left:200,top:326},
            {left:800,top:782},
            {left:1080,top:768}
          ]
        },
        ease: Power4.easeInOut,
        // repeat: -3
      });

      var pixel = $(".pixel-03");
        TweenLite.to(pixel, 4, {
          bezier: {
            autoRotate: 45,
            curviness: 2,
            delay: 0,
            values: [
              {left:1700,top:500},
              {left:1400,top:300},
              {left:757,top:600},
              {left:350,top:154},
              {left:800,top:454},
              {left:1800,top:768}

            ]
          },
          ease: Power4.easeInOut,
          // repeat: -3
        });

      var pixel = $(".pixel-04");
        TweenLite.to(pixel, 4, {
          bezier: {
            autoRotate: 45,
            curviness: 2,
            delay: 0,
            values: [
              {left:982,top:782},
              {left:600,top:200},
              {left:100,top:650},
              {left:50,top:450},
              {left:400,top:100},
              {left:982,top:782}

            ]
          },
          ease: Power4.easeInOut,
          // repeat: -3
        });

    // purple pixels 01- 04
      var pixel = $(".pixel-05");
        TweenLite.to(pixel, 6, {
          bezier: {
            autoRotate: 45,
            curviness: 2,
            delay: 0,
            values: [
              {left:962,top:326},
              {left:1200,top:550},
              {left:1800,top:600},
              {left:1000,top:350},
              {left:650,top:250},
              {left:962,top:326}
            ]
          },
          ease: Power4.easeInOut,
          // repeat: -3
        });

        var pixel = $(".pixel-06");
          TweenLite.to(pixel, 6, {
            bezier: {
              autoRotate: 45,
              curviness: 2,
              delay: 0,
              values: [
                {left:854,top:200},
                {left:200,top:800},
                {left:500,top:1200},
                {left:900,top:650},
                {left:800,top:800},
                {left:854,top:200}
              ]
            },
            ease: Power4.easeInOut,
            // repeat: -3
          });

          var pixel = $(".pixel-07");
            TweenLite.to(pixel, 6, {
              bezier: {
                autoRotate: 45,
                curviness: 2,
                delay: 0,
                values: [
                  {left:1686,top:190},
                  {left:1200,top:900},
                  {left:600,top:650},
                  {left:100,top:850},
                  {left:50,top:454},
                  {left:1686,top:190}

                ]
              },
              ease: Power4.easeInOut,
              // repeat: -3
            });

          var pixel = $(".pixel-08");
            TweenLite.to(pixel, 6, {
              bezier: {
                autoRotate: 45,
                curviness: 2,
                delay: 0,
                values: [
                  {left:1500,top:700},
                  {left:250,top:450},
                  {left:650,top:650},
                  {left:50,top:950},
                  {left:900,top:500},
                  {left:1500,top:700}

                ]
              },
              ease: Power4.easeInOut,
              // repeat: -3
            });
      // Green pixels 01- 04
          var pixel = $(".pixel-09");
            TweenLite.to(pixel, 9, {
              bezier: {
                autoRotate: 45,
                curviness: 2,
                delay: 0,
                values: [
                  {left:688,top:838},
                  {left:100,top:200},
                  {left:250,top:650},
                  {left:900,top:450},
                  {left:400,top:800},
                  {left:388,top:838}

                ]
              },
              ease: Power4.easeInOut,
              // repeat: -3
            });
          var pixel = $(".pixel-10");
            TweenLite.to(pixel, 9, {
              bezier: {
                autoRotate: 45,
                curviness: 2,
                delay: 0,
                values: [
                  {left:554,top:170},
                  {left:1755,top:550},
                  {left:1200,top:155},
                  {left:600,top:357},
                  {left:400,top:784},
                  {left:554,top:170}
                ]
              },
              ease: Power4.easeInOut,
              // repeat: -3
            });

            var pixel = $(".pixel-11");
              TweenLite.to(pixel, 9, {
                bezier: {
                  autoRotate: 45,
                  curviness: 2,
                  delay: 0,
                  values: [
                    {left:250,top:750},
                    {left:840,top:154},
                    {left:656,top:989},
                    {left:845,top:215},
                    {left:1545,top:541},
                    {left:250,top:750}
                  ]
                },
                ease: Power4.easeInOut,
                // repeat: -3
              });

              var pixel = $(".pixel-12");
                TweenLite.to(pixel, 9, {
                  bezier: {
                    autoRotate: 45,
                    curviness: 2,
                    delay: 0,
                    values: [
                      {left:1252,top:366},
                      {left:1800,top:565},
                      {left:1654,top:1212},
                      {left:685,top:898},
                      {left:1544,top:655},
                      {left:1252,top:366}

                    ]
                  },
                  ease: Power4.easeInOut,
                  // repeat: -3
                });

              // var pixel = $(".pixel-08");
              //   TweenLite.to(pixel, 7, {
              //     bezier: {
              //       autoRotate: 45,
              //       curviness: 2,
              //       values: [
              //         {left:1500,top:700},
              //         {left:145,top:656},
              //         {left:684,top:784},
              //         {left:1544,top:354},
              //         {left:900,top:155},
              //         {left:1500,top:700}
              //
              //       ]
              //     },
              //     ease: Power4.easeInOut,
              //     // repeat: -3
              //   });



});

// $( document ).ready(function() {
//
//   var header = $(".header-intro");
//
//     TweenLite.to(header, 5, {x:"900px"});
//
//
// });
