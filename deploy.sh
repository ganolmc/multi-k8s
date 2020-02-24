docker build -t mykhailohanol/multi-fe:latest -t mykhailohanol/multi-fe:$SHA -f ./fe/Dockerfile ./fe
docker build -t mykhailohanol/multi-server:latest -t mykhailohanol/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t mykhailohanol/multi-worker:latest -t mykhailohanol/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push mykhailohanol/multi-fe:latest
docker push mykhailohanol/multi-server:latest
docker push mykhailohanol/multi-worker:latest
docker push mykhailohanol/multi-fe:$SHA
docker push mykhailohanol/multi-server:$SHA
docker push mykhailohanol/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=mykhailohanol/multi-server:$SHA
kubectl set image deployments/client-deployment client=mykhailohanol/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=mykhailihanol/miltu-worker:$SHA
