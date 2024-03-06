.PHONY: develop
develop:
	docker compose \
		--file docker-compose.yml \
		--profile develop \
		up \
		--detach \
		--build
	docker image prune -f

.PHONY: production
production:
	docker compose \
		--file docker-compose.yml \
		--profile production \
		up \
		--detach \
		--build
	docker image prune -f

.PHONY: clean
clean:
	docker compose \
		--profile "*" \
		--file docker-compose.yml \
		down \
		--timeout 1
