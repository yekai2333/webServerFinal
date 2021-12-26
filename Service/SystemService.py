import os
import re

def getSys():
    files=os.popen("ls -l /").readlines()
    del files[0]
    data=[]
    for line in files:
        if line[0]=="l":
            continue
        infos=line.split()
        info=[infos[8],infos[1]]
        x=os.popen("du --max-depth=1 /"+infos[8]).readlines()
        size=x[-1].strip()
        info.append(size.split()[0])
        data.append(info)
    return {"data":data}

def getLog():
    files = os.popen("ls -l /var/log").readlines()
    data = []
    del files[0]
    for line in files:
        line = line.strip()
        infos = line.split()
        info = {}
        if line[0] == "d":
            continue
        name = infos[8]
        date = infos[5] + " " + infos[6]
        info["name"] = name
        info["date"] = date
        lines = int(os.popen("cat /var/log/" + name + " | wc -l").read().strip())
        if "lines" in info.keys():
            info["lines"] += lines
        else:
            info["lines"] = lines
        errors = int(os.popen(
            "cat /var/log/" + name + " | egrep '(error)|(Fail)|(fail)|(Invalid)|(invalid)|(Error)|(fatal)|(Fatal)' | wc -l").read().strip())
        if "errors" in info.keys():
            info["errors"] += errors
        else:
            info["errors"] = errors
        data.append(info)
    return {"data":data}

def getNginx():
    files = os.popen("cat /usr/local/nginx/logs/access.log").readlines()
    data = []
    dic = {}
    for line in files:
        line = line.strip()
        infos = line.split()
        x = infos[3]
        path = infos[6]
        x = re.split("[\[*/*/]", x)
        date = x[2] + " " + x[1]
        lib = {}
        flag = False
        if date in dic.keys():
            lib = dic[date]
            flag = True
        if path not in lib:
            lib[path] = 1
        else:
            lib[path] += 1
        if not flag:
            dic[date] = lib
    for key in dic.keys():
        big = None
        num = 0
        for item in dic[key].items():
            if item[1] > num:
                num = item[1]
                big = item
        data.append({"date": key, "name": big[0], "num": big[1]})
    return {"data":data}