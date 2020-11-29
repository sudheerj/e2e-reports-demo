FROM codeception/codeceptjs:latest

COPY tests/e2e /workspace/tests/e2e
COPY codecept.conf.js /workspace/
COPY package.json /workspace/
COPY package-lock.json /workspace/

WORKDIR /workspace
RUN npm ci --unsafe-perm

ONBUILD ADD . /workspace
ONBUILD WORKDIR /workspace

RUN chmod 777 /workspace/tests/e2e/docker/run-tests.sh

CMD /workspace/tests/e2e/docker/run-tests.sh