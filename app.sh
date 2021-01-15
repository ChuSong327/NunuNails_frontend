ng build --prod && \
cp CNAME dist/NunuNails/ && \
cd dist/NunuNails/ && \
git init && \
git remote add origin https://github.com/ChuSong327/NunuNails-Frontend.git && \
git add -A && \
git commit -m "Update Deploy" &&\
git push -f origin master &&\
cd ../../ &&\
rm -rf dist;
