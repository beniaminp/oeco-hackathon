rsync -azvh --progress ../target/oeco-backend-1.0-SNAPSHOT.jar -e "ssh -i hackatron.pem" ec2-user@ec2-15-236-123-217.eu-west-3.compute.amazonaws.com:/home/ec2-user/app/
rsync -azvh --progress ../oeco-frontend/dist/oeco-frontend/* -e "ssh -i hackatron.pem" ec2-user@ec2-15-236-123-217.eu-west-3.compute.amazonaws.com:/home/ec2-user/app/public/