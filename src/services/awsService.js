const AWS = require('aws-sdk')
AWS.config.update({region: 'us-east-2'})

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
// const bucketName = 'kitty-cat-bucket123'


//test bucket lists
s3.listBuckets(function(err, res) {
    if (err) {
        console.log('error', err)
    } else {
        console.log('success', res.Buckets)
    }
})

// s3.listObjects(bucketName, function(err, data) {
//     if (err) {
//         console.log('error', err)
//     } else {
//         console.log('success', data)
//     }
// })

