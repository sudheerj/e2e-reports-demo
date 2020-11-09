FROM codeception/codeceptjs:main

RUN apt-get update && apt-get install -y sshpass sync

COPY tests/e2e /workspace

WORKDIR /workspace
RUN npm ci --unsafe-perm

ONBUILD ADD . /workspace
ONBUILD WORKDIR /workspace

RUN chmod 777 /workspace/docker/run-tests.sh

CMD /workspace/docker/run-tests.sh