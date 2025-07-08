import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Dummy training data
data = pd.DataFrame({
    'material_type': [0, 1, 2],  # Assume encoded: 0=Plastic, 1=Paper, 2=Metal
    'category': [0, 1, 2],       # 0=Art, 1=Utility, 2=Wearable
    'is_recyclable': [0, 1, 1],
    'score': [40, 75, 85]
})

X = data[['material_type', 'category', 'is_recyclable']]
y = data['score']

model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, 'simple_model.pkl')
