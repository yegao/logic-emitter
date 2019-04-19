import map from './index.js'

export default function caniuse () {
    return {
    //   name: 'caniuse', 
    //   resolveId ( importee ) {
    //   },
    //   load ( id ) {
        name: "filesize",
        ongenerate(bundle,{code}) {
            console.log(map);
        }
    };
  }