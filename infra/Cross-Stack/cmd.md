## Login to AWS ECR

```
aws ecr get-login --no-include-email --profile gulmohars | sh
```

## Create Repository

```
aws ecr --profile gulmohars create-repository --repository-name gulmohar/poc-caching-engine

aws ecr --profile gulmohars describe-repositories --repository-name gulmohar/poc-caching-engine
```

## Get the repository url from above

458022107738.dkr.ecr.us-east-2.amazonaws.com/gulmohar/poc-caching-engine

## List repository images

```
aws ecr --profile gulmohars list-images --repository-name gulmohar/poc-caching-engine

aws ecr --profile gulmohars describe-images --repository-name gulmohar/poc-caching-engine --image-ids imageTag=v0.0.1
```

## List any particular image from the Repository

```
aws ecr --profile gulmohars batch-delete-image --repository-name gulmohar/poc-caching-engine --image-ids imageTag=v0.0.1
```

## Build the image locally and push it to AWS ECR

```
docker build -t poc-caching-engine:v0.0.1 .

docker tag poc-caching-engine:v0.0.1 458022107738.dkr.ecr.us-east-2.amazonaws.com/gulmohar/poc-caching-engine:v0.0.1

docker push 458022107738.dkr.ecr.us-east-2.amazonaws.com/gulmohar/poc-caching-engine:v0.0.1
```

## Delete Repository

```
aws ecr --profile gulmohars delete-repository --repository-name gulmohar/poc-caching-engine --force

aws ecr --profile gulmohars delete-repository --repository-name poc_caching_service --force
```

## Commands to create the stack

```
aws cloudformation --profile gulmohars create-stack --stack-name vpc --template-body file://$PWD/infra/Cross-Stack/cloudformation/01_vpc-network.yml

aws cloudformation  --profile gulmohars create-stack --stack-name nat --template-body file://$PWD/infra/Cross-Stack/cloudformation/02_nat-gateway.yml

aws cloudformation --profile gulmohars create-stack --stack-name lb --template-body file://$PWD/infra/Cross-Stack/cloudformation/03_load-balancer.yml

aws cloudformation  --profile gulmohars create-stack --stack-name ecs --template-body file://$PWD/infra/Cross-Stack/cloudformation/04_ecs-cluster.yml --capabilities CAPABILITY_IAM

aws cloudformation --profile gulmohars create-stack --stack-name cs --template-body file://$PWD/infra/Cross-Stack/cloudformation/05_customer-service.yml

aws cloudformation  --profile gulmohars create-stack --stack-name oss --template-body file://$PWD/infra/Cross-Stack/cloudformation/06_order-service.yml

aws cloudformation --profile gulmohars create-stack --stack-name ec --template-body file://$PWD/infra/Cross-Stack/cloudformation/07_caching-service.yml
```

#

> Go to stack lb => chk the output tag => get the external url as below

http://lb-PublicLo-ZZ5BD32MG6FN-1394132557.us-east-2.elb.amazonaws.com

> on web browser hit

```
http://lb-publiclo-zz5bd32mg6fn-1394132557.us-east-2.elb.amazonaws.com/api/v1/customerservice/health

http://lb-publiclo-zz5bd32mg6fn-1394132557.us-east-2.elb.amazonaws.com/api/v1/orderservice/health

http://lb-publiclo-zz5bd32mg6fn-1394132557.us-east-2.elb.amazonaws.com/api/v1/customerservice/customers/1

http://lb-publiclo-zz5bd32mg6fn-1394132557.us-east-2.elb.amazonaws.com/api/v1/orderservice/orders/1

http://localhost:4002/api/v1/caching-service/health

http://lb-publiclo-zz5bd32mg6fn-1394132557.us-east-2.elb.amazonaws.com/api/v1/caching-service/health
```

#
