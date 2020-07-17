aws ecr get-login --no-include-email --profile gulmohars | sh

aws cloudformation --profile gulmohars create-stack --stack-name rc --template-body file://\$PWD/caching-poc/infra/cross-Stack-CICD-added-Elastic/cloudformation/04_a_redis-cluster.yml

aws cloudformation --profile gulmohars create-stack --stack-name ec --template-body file://\$PWD/caching-poc/infra/cross-Stack-CICD-added-Elastic/cloudformation/07_caching-service.yml

login to aws console >> cloudformation >> create stack-name
select the upload template and choose the file -->> caching-poc/INFRA/CICD-Cross-Stack/deployment-pipeline.yaml

CICD NOT WORKING, but cloudformation template code is ready - some issue with deployment template

http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/customerservice/customers/1
http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/orderservice/orders/1

go to stack lb => chk the output tag => get the external url as below
http://lb-PublicLo-ZZ5BD32MG6FN-1394132557.us-east-2.elb.amazonaws.com

on web browser

hit
http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/customerservice/health

http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/orderservice/health

http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/customerservice/customers/1
http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/orderservice/orders/1

18002583474

http://localhost:4002/api/v1/redis-service/health

http://lb-PublicLo-1V1A0HQ9KL1X6-1597432821.us-east-2.elb.amazonaws.com/api/v1/redis-service/health

aws ecr --profile gulmohars delete-repository --repository-name gulmohar/poc-caching-engine --force
aws ecr --profile gulmohars delete-repository --repository-name poc_caching_service --force

aws ecr --profile gulmohars create-repository --repository-name gulmohar/poc-caching-engine
aws ecr --profile gulmohars describe-repositories --repository-name gulmohar/poc-caching-engine

458022107738.dkr.ecr.us-east-2.amazonaws.com/gulmohar/poc-caching-engine

aws ecr --profile gulmohars list-images --repository-name gulmohar/poc-caching-engine
aws ecr --profile gulmohars batch-delete-image --repository-name gulmohar/poc-caching-engine --image-ids imageTag=v0.0.1

docker build -t poc-caching-engine:v0.0.1 .
docker tag poc-caching-engine:v0.0.1 458022107738.dkr.ecr.us-east-2.amazonaws.com/gulmohar/poc-caching-engine:v0.0.1
docker push 458022107738.dkr.ecr.us-east-2.amazonaws.com/gulmohar/poc-caching-engine:v0.0.1

aws ecr --profile gulmohars list-images --repository-name gulmohar/poc-caching-engine
aws ecr --profile gulmohars describe-images --repository-name gulmohar/poc-caching-engine --image-ids imageTag=v0.0.1
