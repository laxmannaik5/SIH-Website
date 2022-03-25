import cv2
import glob
import numpy as np
import pandas as pd
image = cv2.imread('C:/Users/laxma/Desktop/SIH_PROJECT/Website/server/images/image5.jpg')
cyclone_image = image[500:,200:,:]
kernel1 = np.ones( (3,3), dtype=np.uint8 )
erode_img1 = cv2.erode(cyclone_image,kernel1,iterations=2)
dil_img1 = cv2.dilate(erode_img1,kernel1,iterations=1)
gray_test_image = cv2.cvtColor(dil_img1, cv2.COLOR_BGR2GRAY)
scaled_gray_image = cv2.convertScaleAbs(gray_test_image, alpha=1.12, beta=-20)

def Hist(image):
    H = np.zeros(shape=256)
    s = image.shape
    for i in range(s[0]):
        for j in range(s[1]):
            k = image[i,j]
            H[k] += 1
    return H
hist_test_image = Hist(scaled_gray_image)
u = pd.read_csv('C:/Users/laxma/Desktop/SIH_PROJECT/Website/server/Histogram_datas.csv')
u = np.array(u)
v = pd.read_csv('C:/Users/laxma/Desktop/SIH_PROJECT/Website/server/Histogrm_file_names.csv')
v = np.array(v).flatten()
matching = 0
for i in range(len(u)):
    hist_list = u[i]
    relation = np.corrcoef(hist_test_image,hist_list)
    if (relation[0,1]>matching):
        matching = relation[0,1]
        file = v[i]
percentage_corr = matching
file_name_matched = file
intensity = pd.read_csv('C:/Users/laxma/Desktop/SIH_PROJECT/Website/server/cyclone_intensity_data.csv')
for j in range(len(intensity)):
    if (intensity.iloc[j]['ISO_TIME'] == file_name_matched[:18]):
        print(' Wind Speed = '+str(intensity.iloc[j]['WMO_WIND']) +'kt'+ ', Wind Pressure = '+ str(intensity.iloc[j]['WMO_PRES'] )+'mb' )
