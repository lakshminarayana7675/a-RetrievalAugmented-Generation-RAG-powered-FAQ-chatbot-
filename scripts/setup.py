import json
import openai
from tqdm import tqdm

openai.api_key = "YOUR_API_KEY"

with open('../data/faq.json') as f:
    faqs = json.load(f)

output = []

for item in tqdm(faqs):
    embedding = openai.Embedding.create(
        input=item["question"],
        model="text-embedding-ada-002"
    )["data"][0]["embedding"]
    
    output.append({
        "question": item["question"],
        "answer": item["answer"],
        "embedding": embedding
    })

with open('faq_with_embeddings.json', 'w') as f:
    json.dump(output, f)
