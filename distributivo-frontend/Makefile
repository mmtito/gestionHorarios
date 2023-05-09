git-pull:
	@ git pull
ng-install:
	@ sudo rm -rf $$(pwd)/node_modules
	@ sh -c "docker run -it --rm -w /app -v $$(pwd):/app node-angular:16.14 npm install --save --silent"
ng-build-local:
	@ sudo rm -rf $$(pwd)/dist
	@ sh -c "docker run -it --rm -w /app -v $$(pwd):/app node-angular:16.14 ng b --configuration=local"
build-local:
	@ docker build -f devops/Dockerfile-local -t distributivo-frontend:local .
deploy-local:
	@ docker stack deploy -c devops/stack-local.yml distributivo-frontend
deploy-local-all:rm git-pull ng-install ng-build-local ng-build-local deploy-local
rm:
	@ docker stack rm distributivo-frontend
ng-build-prod:
	@ sudo rm -rf $$(pwd)/dist
	@ sh -c "docker run -it --rm -w /app -v $$(pwd):/app node-angular:16.14 ng b --prod"
build-prod:
	@ docker build -f devops/Dockerfile -t distributivo-frontend:prod .
deploy-prod:
	@ docker stack deploy -c devops/stack-prod.yml distributivo-frontend
desplegar:rm git-pull ng-install ng-build-prod build-prod deploy-prod
